<script>
    import screenshot from "$lib/assets/Flintlock/screenshot.png";
</script>

<style>
    @media only screen and (min-width: 767px) {
        p {
            font-size: 10;
        }
    }
</style>

<h1>flintlock</h1>

<img src={screenshot} alt="development of flintlock" style="border-radius: 0.5em; width: 100%; max-width: 550px; align-self: center;"/>

<h2 id="about">
    <a href="#about">about</a>
</h2>

<p>
    Flintlock is a 2D renderer (for now) and game engine written in Rust. The
    goal is to have a fully functional 2D renderer + level editor that has an 
    embedded scripting language and can bundle and ship a 2D game. It's 
    open-source: the repository can be found 
    <a href="https://github.com/joepigott/flintlock-2D">here</a>.
</p>

<p>
    The project itself borrows heavily from both the Vulkano 
    <a href="https://vulkano.rs">documentation</a> and GitHub user taidaesal's
    <a href="https://github.com/taidaesal/vulkano_tutorial">Vulkano tutorial</a>.
</p>

<p>
    I'll document my process and progress here and what I'd like the API to 
    look like in the future. I'll also document how the components of the 
    system work and the technologies used to build them.
</p>

<h2 id="the-journey">
    <a href="#the-journey">the journey</a>
</h2>

<p>
    After a few iterations, I landed on a project structure: the
    <code>Application</code> struct handles events and owns an instance of the
    <code>Renderer</code> struct, which it makes render calls to. The renderer 
    must be primed with <code>renderer.start()</code>, then 
    <code>renderer.draw()</code> must be called and provided a
    triangle or quad that implements the <code>Renderable</code> trait (or 
    <code>color_draw()</code> and <code>ColorRenderable</code> for non-textured
    primitives). After this, <strong>each lighting pass must be explicitly
    called</strong>: following draw calls, <code>renderer.ambient()</code>,
    <code>renderer.directional()</code>, and <code>renderer.point()</code> must
    be called, and <code>directional()</code> and <code>point()</code> must
    be provided a <code>DirecionalLight</code> and <code>PointLight</code>,
    respectively.
</p>

<p>
    The obvious choice for graphics API was Vulkan, since it provides a great 
    modern abstraction for GPUs and platform agnosticism. However, it comes
    with a much more verbose API and initialization. The basics (in pseudocode)
    go something like this:
</p>

<code class="block">
{`\
fn new() -> Renderer {
    load Vulkan library and bindings

    determine required extensions

    create a new Vulkan instance

    create a rendering surface

    enumerate and choose a physical device (gpu) and queue families

    create a logical device and related queue

    create a swapchain and array of images

    create a memory allocator, descriptor set allocator, and command buffer
    allocator

    load shaders

    create render pass, with subpasses for geometry and lighting

    create graphics pipelines:
        deferred pipeline for geometry
        ambient pipeline for ambient light
        point pipeline for point lights
        directional pipeline for directional lights

    create buffers:
        matrix buffer containing view and projection data
        model buffer (eventually) containing model transformation data
        ambient, point, and directional buffers containing light data, respectively
        screen vertex buffer providing a target for lighting passes

    set view/projection data layouts and descriptor sets

    set the viewport

    create framebuffers and color buffer

    create an empty command buffer

    create a swapchain future

    set the render stage
}
`}
</code>

<p>
    This skips over a lot of details, but it's generally correct. After this 
    initialization, rendering really isn't too hard.
</p>
