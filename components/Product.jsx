// helper component for structuring a product page

export default function Product({title, description}) { //image?
    return (
        <div>
            <p>title: {title}</p>
            <p>description: {description}</p>
        </div>
    );
}