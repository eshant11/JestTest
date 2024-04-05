import { useState } from 'react';

const Form = () => {
    const [comment, setComment] = useState("");
    const [commentArray, setCommentArray] = useState([]);
    const [isEdit, setIsEdit] = useState(false)
    const [updateElemIndex, setupdateElemIndex] = useState(0);
    const [editIndex, setEditIndex] = useState(null); // Track the index of the comment being edited
    // to submit your new comment and update the comment
    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment !== "") {
            if (!isEdit) {
                setCommentArray((prev) => {
                    const updatedArray = [...prev, comment];
                    setComment("");
                    return updatedArray;
                }
                )
            } else {
                setCommentArray((prevArray) => {
                    const newArray = [...prevArray];
                    newArray[updateElemIndex] = comment;
                    return newArray;
                });
                setComment("");
                setIsEdit(false)
                setEditIndex(null);

            }
        }
    }
    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const removeComment = (id) => {

        setCommentArray((prevArray) =>
            prevArray.filter((item, index) =>
                id !== index
            )
        )
        setComment("");
        setIsEdit(false);
        console.log(commentArray, id);
    }

    const editComment = (index) => {
        setIsEdit(true);
        setupdateElemIndex(index);
        setEditIndex(index);
        setComment(commentArray.find((item, id) => {
            return id === index;
        }))
    };
    const removeAll = () => {
        setCommentArray([])
    };

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <div style={{ position: 'absolute', top: '30%', left: '40%', }}>
                <form onSubmit={handleSubmit} className='form'>
                    <input type="text" value={comment} onChange={handleChange} style={{ marginRight: '5px' }} />
                    {!isEdit ? (<button type='submit' style={{ marginRight: '5px' }}>Add Comment</button>) : (<button style={{ marginRight: '5px' }} >Update</button>)}
                    <br />
                    <button onClick={removeAll} disabled={isEdit}>Remove All</button>

                </form>
                <div className="data">
                    {commentArray.map((currentElem, index) => {
                        return <div key={index}>
                            <p>{currentElem}</p>
                            {editIndex === index && isEdit ? (
                                <button className="discard" style={{ marginRight: '5px' }} onClick={() => {
                                    setIsEdit(false);
                                    setEditIndex(null);
                                    setComment("");
                                }}>Discard</button>
                            ) : (
                                <button className="edit" style={{ marginRight: '5px' }} onClick={() => editComment(index)}>Edit</button>
                            )}

                            <button className="delete" onClick={() => removeComment(index)}>Delete</button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Form;