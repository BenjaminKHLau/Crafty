import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateMerchThunk } from "../../store/merch";


function MerchEditFormComponent({merchId}){
    const dispatch = useDispatch();
    const history = useHistory();

    const session = useSelector(state => state.session)
    const merchSelector = useSelector(state => state.merch)
    console.log("merch selector in edit form: ", merchSelector[merchId])
    const merch = merchSelector[merchId]
    console.log("merch : ", merch)
    
    const [name, setName] = useState(merch.name);
    const [description, setDescription] = useState(merch.description);
    const [image, setImage] = useState(merch.merch_image_url)
    const [errors, setErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const user = session.user ? session.user : null
    console.log("USER IN FORM: ", user)


    useEffect(() => {
        const errors = []
        if (name.length < 3 || name.length > 40) errors.push("Please provide a name between 3-40 characters");
        if (description.length < 3 || description.length > 255) errors.push("Please provide a description between 3-255 characters");

        setErrors(errors)
    }, [name, description]);


    async function subby(e) {
        e.preventDefault();
        setIsSubmitted(true);
        if (errors.length > 0) {
          return;
        }

        let newMerch = await dispatch(
            updateMerchThunk({
              name,
              description,
              owner_id: user.id,
              merch_image_url: image,
              shop_id: merchSelector[merchId].shop_id

            }, merchId)
          );
      
          if (newMerch.errors) setErrors([...Object.values(newMerch.errors)])
        //   else history.push(`/merch/${newMerch.id}`);
        }

        const showErrors = errors.map((error) => (
            <div className="error-messages" key={error}>
              {error}
            </div>
          ));




    return (
        <form className="business-form" onSubmit={subby}>
      <h2 className="title">Edit Merchandise!</h2>
      <ul className="errors">{isSubmitted && showErrors}</ul>



          <label className="form-stuff">
            Product Name
            </label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />



          <label className="form-stuff">
            Image URL
            </label>
            <input
              className="form-input"
              type="text"
              name="shopImage"
              placeholder="Image URL (Optional)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

          <label className="form-stuff">
            Description
            </label>
            <input
              className="form-input"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

          <button
            type="submit"
            disabled={isSubmitted && errors.length > 0}
            className={
              isSubmitted && errors.length > 0 ? "noob" : "submit-button-login"
          }
          >
            Edit Merchandise
          </button>


    </form>
    )
}

export default MerchEditFormComponent;