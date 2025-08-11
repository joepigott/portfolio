import StyledImage from '@/app/ui/styled_image';
import { montserrat } from '@/app/ui/fonts';
import pixels_wide from '@/public/pixels/pixels_wide.jpg';
import HighlightText from '@/app/ui/highlight';
import pixels_ui from '@/public/pixels/ui.png';
import cows_sorted from '@/public/pixels/cows_sorted.png';

export default function Pixels() {
    return (
        <div className={`${montserrat.className} antialiased flex flex-col gap-40 md:-mt-12 items-center text-xl`}>
            <div className='flex flex-col gap-10 items-center'>
                <StyledImage src={pixels_wide} alt="ASCII art of the word 'pixels', pixel sorted to appear glitchy" title="Pixels, pixel sorted" />
                <h1>
                    A GUI <HighlightText>pixel sorter</HighlightText> for 
                    creating unique visuals, written in{' '}
                    <HighlightText>Rust</HighlightText>.
                </h1>
            </div>
            <div className='flex flex-col md:flex-row gap-10 items-center justify-center'>
                <div className='flex-1'>
                    <StyledImage src={pixels_ui} alt="A screenshot of the 'pixels' program ui" title="The prototype ui for 'pixels'" />
                </div>
                <div className='flex-1'>
                    <h2>
                        Support for{' '}
                        <HighlightText>thresholding</HighlightText>,{' '}
                        allowing fine tuned control over what gets sorted and
                        what doesn't.
                    </h2>
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse gap-10 items-center justify-center'>
                <div className='flex-1'>
                    <StyledImage src={cows_sorted} alt="A photo of cows, with low-variation sorting forming vertical stripes" title="Low-variation sorting to form stripes" />
                </div>
                <div className='flex-1'>
                    <h2>
                        Immense and intuitive{' '}
                        <HighlightText>creative control</HighlightText>. Many
                        effects can be created with only a few tweaks.
                    </h2>
                </div>
            </div>
            <div>
                <h2>
                    <HighlightText>Pixels</HighlightText> is still in early
                    development. Stay tuned!
                </h2>
            </div>
        </div>
    );
}
