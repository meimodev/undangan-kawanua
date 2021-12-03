import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import {Gallery, Item} from 'react-photoswipe-gallery'

const CustomGallery = ({images}) => {

    if (!images) {
        return <div/>
    }

    return (
        <div>
            <div className='text-center'>Gallery</div>
            <div className='grid grid-cols-2 gap-1'>
                <Gallery>
                    {images.map((e, index) => {

                            if (e.src === 'divider') {
                                return e.divider
                            }

                            return (
                                <Item
                                    key={index}
                                    original={e.src}
                                    thumbnail={e.thumbnail}
                                    width={e.width}
                                    height={e.height}
                                >
                                    {({ref, open}) => (
                                        <img
                                            className='h-32'
                                            ref={ref}
                                            onClick={open}
                                            src={e.thumbnail ? e.thumbnail : e.src}
                                            alt={e.alt ? e.alt : "images " + index}/>
                                    )}
                                </Item>
                            );
                        }
                    )}

                </Gallery>
            </div>
        </div>

    )
}
export default CustomGallery