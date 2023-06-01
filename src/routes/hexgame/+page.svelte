<script>
    import Prism from '@magidoc/plugin-svelte-prismjs';
    import 'prismjs/components/prism-rust';
    import 'prismjs/themes/prism-okaidia.css';

    import Rust from '../Rust.svelte';
</script>

<h1> hexgame </h1>

<p>
    Hexgame is a simple two-player CLI game with one goal: connect two sides of
    the board! If the red player connects the top and bottom, they win; if the
    blue player connects the left and right, they win. Any n x n size board 
    (greater than 2) is allowed. Hexgame is fully open-source: the repo can be 
    found <a href="https://github.com/joepigott/hexgame-rs">here</a>.
</p>

<h2 id="how"><a href="how">how?</a></h2>

<p>
    In the <code>HexGame</code> struct, there are two main fields that deal
    with data: <code>game</code>, a <code>Vec&lt;Color&gt;</code> that keeps 
    track of the pieces placed, and <code>logic</code>, a 
    <code>DisjointSet</code> containing every piece as well as symbolic
    pieces for the edges. As the name suggests, the <code>logic</code> set
    controls the logic of the game: once the top and bottom or left and right
    edges are part of the same set, a player has won, and the game is over.
</p>

<h3 id="disjoint-set"><a href="#disjoint-set">disjoint set</a></h3>

<p>
    The point of the exercise was to implement a disjoint set data structure,
    and use it to create a product (originally in Java, see 
    <a href="#why">why</a>). The struct itself is surprisingly simple: it
    contains a field <code>nodes: Vec&lt;isize&gt;</code> in which all values
    are initialized to <code>-1</code>. Each node represents either the
    (negative) size of its set if it is the root, or its parent node.
</p>

<p>
    The algorithm to find the root of a set uses <em>path compression</em>: 
    whenever a node is touched, its parent is changed to the root of the set. 
    This causes much shorter traversals on average. The algorithm itself is as 
    follows:
</p>

<Rust src={`\
pub fn find(&mut self, node: &usize) -> usize {
    if node >= &self.nodes.len() {
        panic!("Index out of bounds!");
    }

    if self.nodes[*node] < 0 {
        return *node;
    }

    let mut current: usize = *node;
    let mut data: isize = self.nodes[*node];
    let mut to_compress: Vec<usize> = Vec::new();

    while data >= 0 {
        to_compress.push(current);

        current = data as usize;
        data = self.nodes[current];
    }

    for comp_node in to_compress {
        self.nodes[comp_node] = current as isize;
    }

    return current;
}
`}
/>

<p>
    Let's look at this chunk-by-chunk:
</p>

<Rust src={`\
if self.nodes[*node] < 0 {
    return *node;
}
`}
/>

<p>
    Negative values represent the size of a set and are only held by roots. So,
    if the given node is negative, it is already the root of the set and is 
    returned.
</p>

<Rust src={`let mut current: usize = *node;
let mut data: isize = self.nodes[*node];
let mut to_compress: Vec<usize> = Vec::new();

while data >= 0 {
    to_compress.push(current);

    current = data as usize;
    data = self.nodes[current];
}
`}
/>

<p>
    This is the traversal of the set. The first few lines store the current
    node and the data held by that node, and creates a <code>Vec</code> to keep
    track of nodes that have been visited. Any positive value represents a
    parent, so, while <code>data</code> is positive, we can set current to the
    node's parent and repeat the cycle. Once it reaches a negative value, it
    has found the root, and the loop exits. Each node touched is also pushed to
    the <code>to_compress</code> list.
</p>

<Rust src={`\
for comp_node in to_compress {
    self.nodes[comp_node] = current as isize;
}
`}
/>

<p>
    Each node that was visited is then made a direct child of the parent. This
    compresses the set and allows for much faster traversal in the future for
    frequently checked nodes.
</p>

<p>
    The root node stored in <code>current</code> is then returned.
</p>

<p>
    The algorithm to join two sets is as follows:
</p>

<Rust src={`\
pub fn union(&mut self, node1: usize, node2: usize) {
    let root: (usize, usize) = (self.find(&node1), self.find(&node2));

    if root.0 == root.1 {
        return;
    }

    if self.nodes[root.0] < self.nodes[root.1] {
        self.nodes[root.0] += self.nodes[root.1];
        self.nodes[root.1] = root.0 as isize;
    } else {
        self.nodes[root.1] += self.nodes[root.0];
        self.nodes[root.0] = root.1 as isize;
    }
}
`}
/>

<p>
    Again, let's look at this chunk-by-chunk:
</p>

<Rust src={`\
let root: (usize, usize) = (self.find(&node1), self.find(&node2));
`}
/>

<p>
    The provided nodes aren't guaranteed to be roots, so the roots of each node
    are found and stored.
</p>

<Rust src={`\
if root.0 == root.1 {
    return;
}
`}
/>

<p>
    If <code>self.find()</code> returns the same root for both nodes, they are
    already part of the same set, so no joining is necessary.
</p>

<Rust src={`\
if self.nodes[root.0] < self.nodes[root.1] {
    self.nodes[root.0] += self.nodes[root.1];
    self.nodes[root.1] = root.0 as isize;
} else {
    self.nodes[root.1] += self.nodes[root.0];
    self.nodes[root.0] = root.1 as isize;
}
`}
/>

<p>
    The algorithm uses <em>smart-union by size</em>: when the two sets are 
    joined, the root of larger of the two becomes the root of the new set. The
    size of a set is stored as a negative value, so if <code>root.0</code> is 
    less than <code>root.1</code>, it becomes the new root (and vice versa).
    The size of the nodes are then added, and the smaller root's parent is set
    to the larger root.
</p>

<h3 id="game"><a href="game">game</a></h3>

<p>
    The <code>HexGame</code> struct is defined as
</p>

<Rust src={`\
pub struct HexGame {
    logic: DisjointSet,
    game: Vec<Color>,
    pub size: usize,
    top: usize,
    bottom: usize,
    left: usize,
    right: usize
}
`}
/>

<p>
    <code>Color</code> is an enum containing <code>Blank</code>, <code>Red</code>,
    or <code>Blue</code>. On initialization, the logic board and game board are
    created with the provided <code>size</code> squared, plus 4 for the edges.
    All elements in the game board start with <code>Blank</code>. The
    <code>top</code>, <code>bottom</code>, <code>left</code>, and <code>right</code>
    elements are calculated and represented as the last four elements.
</p>

<p>
    To play a piece, either <code>HexGame::play_red()</code> or <code>HexGame::play_blue</code>
    (nearly identical) is called:
</p>

<Rust src={`\
pub fn play_red(&mut self, position: usize) -> bool {
    let position = position - 1;

    if position > (self.game.len() - 3) {
        panic!("Index out of bounds!");
    }

    let neighbors: Vec<usize> = self.get_neighbors(position, true);

    if self.is_occupied(position) {
        return false;
    }

    self.game[position] = Color::Red;

    for neighbor in &neighbors {
        if self.game[*neighbor] == Color::Red || *neighbor >= self.game.len() - 4 {
            self.logic.union(position, *neighbor);
        }
    }

    return self.logic.find(&self.top) == self.logic.find(&self.bottom);
}
`}
/>

<p>
    The function returns true only if the win condition is met. Chunk-by-chunk:
</p>

<Rust src={`\
let neighbors: Vec<usize> = self.get_neighbors(position, true);
`}
/>

<p>
    <code>HexGame::get_neighbors()</code> calculates the immediate neighbors on
    the hexagonal board given a position. It calls for a bool <code>is_red</code>
    that simply controls whether the top/bottom or left/right edges are
    considered.
</p>

<Rust src={`\
if self.is_occupied(position) {
    return false;
}

self.game[position] = Color::Red;
`}
/>

<p>
    If the given position is already taken, no action should be taken, and the
    function should return false. Otherwise, set the position to
    <code>Color::Red</code> or <code>Color::Blue</code>, depending on who's
    turn it is.
</p>

<Rust src={`\
for neighbor in &neighbors {
    if self.game[*neighbor] == Color::Red || *neighbor >= self.game.len() - 4 {
        self.logic.union(position, *neighbor);
    }
}
`}
/>

<p>
    If any of the neighbors are red or edges, they should be joined with the
    current position.
</p>

<Rust src={`\
return self.logic.find(&self.top) == self.logic.find(&self.bottom);
`}
/>

<p>
    The win condition is that the top/bottom edges are connected for red, or
    the left/right edges are connected for blue. If the win condition is met,
    the function returns true.
</p>

<hr/>

<h2 id="why"><a href="#why">why?</a></h2>

<p>
    This was originally given as an assignment in the course <em>Algorithms and
    Data Structures</em> which was taught in Java (barf). We were given a plain
    text file of moves to parse, the goal being to detect when either player 
    had won. In order to better learn Rust, I've been re-implementing (almost) 
    all of assignments in it. For this one, parsing a static file and detecting
    the win condition seemed boring, so I made it interactive as an exercise.
</p>
