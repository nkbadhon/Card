import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'
const Card = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
            {/* Image */}
            <img
                className="w-full h-48 object-cover"
                src="https://img.freepik.com/free-vector/happy-birthday-lettering-with-golden-letters_52683-35047.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais"
                alt="Card Image"
            />

            {/* Title */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">শুভ জন্মদিন!</div>
            </div>

            {/* Paragraphs */}
            <div className="px-6 py-4">
                <p className="text-left mb-4">
                    বাইচা থাক, ঢাকা আইতেছি।
                </p>
                <p className="ms-24 size-10 hover:text-purple-800 ">
                    <a href="https://github.com/nkbadhon/Card/blob/main/src/Card.tsx" ><CodeBracketSquareIcon /></a>

                </p>
            </div>
        </div>
    );
};

export default Card;