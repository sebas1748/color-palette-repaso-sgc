import Tag from './Tag';
import './Tags.css'

//palettes es la lista que voy a recibir (PROPS)
const Tags = ({ tags }) => {  
    return(
        <div className='tag-container'>
            <h2>Tags</h2>
            {tags.map((tag) => ( 
                <Tag key={tag.id} tag={tag} />
        ))}
    </div>
    );
}

export default Tags;