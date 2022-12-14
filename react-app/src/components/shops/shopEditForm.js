import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateShopThunk } from "../../store/shop";

function ShopEditFormComponent({ shopId }) {
	const dispatch = useDispatch();

	const session = useSelector((state) => state.session);
	const allShops = useSelector((state) => state.shops);
	const shop = allShops[shopId];
	// console.log("SHOPS IN FORM: ", allShops)

	const [name, setName] = useState(shop.name);
	const [description, setDescription] = useState(shop.description);
	const [image, setImage] = useState(shop.shop_image_url);
	const [errors, setErrors] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const user = session.user ? session.user : null;
	// console.log("USER IN FORM: ", user)

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

		let newShop = dispatch(
			updateShopThunk(
				{ name, description, shop_image_url: image, owner_id: user.id },
				shopId
			)
		);
		// .then(() => getShopByIdThunk(shopId));

		if (newShop.errors) setErrors([...Object.values(newShop.errors)]);
		//   else history.push(`/shops/${newShop.id}`);
	}

	const showErrors = errors.map((error) => (
		<div className="error-messages" key={error}>
			{error}
		</div>
	));

	return (
		<form className="business-form" onSubmit={subby}>
			<div className="title">Edit Your Shop!</div>
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
					Edit Shop
				</button>
			</div>
		</form>
	);
}

export default ShopEditFormComponent;
