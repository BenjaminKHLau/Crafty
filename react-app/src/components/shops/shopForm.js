import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addShopThunk } from "../../store/shop";

function ShopFormComponent() {
	const dispatch = useDispatch();
	const history = useHistory();

	const session = useSelector((state) => state.session);
	const user = session.user ? session.user : null;
	console.log("USER IN FORM: ", user);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [errors, setErrors] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		const errors = [];
		if (name.length < 3 || name.length > 40) errors.push("Please provide a name between 3-40 characters");
		if (description.length < 3 || description.length > 255) errors.push("Please provide a description between 3-255 characters");

		setErrors(errors);
	}, [name, description]);

	async function subby(e) {
		e.preventDefault();
		setIsSubmitted(true);
		if (errors.length > 0) {
			return;
		}

		let newShop = await dispatch(
			addShopThunk({
				name,
				description,
				shop_image_url: image,
				owner_id: user.id,
			})
		);

		if (newShop.errors) setErrors([...Object.values(newShop.errors)]);
		else history.push(`/shops/${newShop.id}`);
	}

	const showErrors = errors.map((error) => (
		<div className="error-messages" key={error}>
			{error}
		</div>
	));

	return (

		<form className="login-form" onSubmit={subby}>
			<div className="title">Create Your Very Own Shop!</div>
			<div className="errors">{isSubmitted && showErrors}</div>

			{/* <div className="form-css"> */}
				{/* <div className="form-box"> */}
					<label className="form-stuff">
						Shop Name
            </label>
						<input
							className="form-input"
							type="text"
							name="name"
							placeholder="Shop Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
				{/* </div> */}

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
			{/* </div> */}

			<div className="submit">
				<button
					type="submit"
					disabled={isSubmitted && errors.length > 0}
					className={
						isSubmitted && errors.length > 0 ? "noob" : "submit-button-login"
					}
				>
					Create Shop
				</button>
			</div>
		</form>
	);
}

export default ShopFormComponent;
