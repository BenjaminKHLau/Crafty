import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMerchThunk } from "../../store/merch";


function MerchFormComponent({shopId}){
    const dispatch = useDispatch();
    const history = useHistory();

    const session = useSelector(state => state.session)
    const user = session.user ? session.user : null
    console.log("USER IN FORM: ", user)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("")
    const [errors, setErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);


    useEffect(() => {
        const errors = []
        if (name.length < 3) errors.push("Please provide a name between 3-40 characters")
        if (description.length < 3) errors.push("Please provide a description between 3-255 characters")

        setErrors(errors)
    }, [name, description]);


    async function subby(e) {
        e.preventDefault();
        setIsSubmitted(true);
        if (errors.length > 0) {
          return;
        }

        let newMerch = await dispatch(
            addMerchThunk({
              name,
              description,
              merch_image_url: image,
              owner_id: user.id,
              shop_id: shopId

            })
          );
      
          if (newMerch.errors) setErrors([...Object.values(newMerch.errors)])
          else history.push(`/shops/${newMerch.id}`);
        }

        const showErrors = errors.map((error) => (
            <div className="error-messages" key={error}>
              {error}
            </div>
          ));




    return (
        <form className="business-form" onSubmit={subby}>
      <h2 className="title">Create Your Very Own Shop!</h2>
      <ul className="errors">{isSubmitted && showErrors}</ul>


      <div className="form-css">
        <div className="form-box">
          <label className="form-stuff">
            Shop Name
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Shop Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          </div>

          <label className="form-stuff">
            Image URL
            <input
              className="form-input"
              type="text"
              name="shopImage"
              placeholder="Image URL (Optional)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <label className="form-stuff">
            Description
            <input
              className="form-input"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>

        <div className="submit">
          <button
            type="submit"
            disabled={isSubmitted && errors.length > 0}
            className={
              isSubmitted && errors.length > 0 ? "noob" : "submit-button"
          }
          >
            Create Shop
          </button>

      </div>
    </form>
    )
}

export default MerchFormComponent;