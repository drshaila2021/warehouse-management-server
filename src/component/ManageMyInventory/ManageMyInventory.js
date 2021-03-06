import React from "react";

const ManageMyInventory = (props) => {
  const { _id, picture, name, price, quantity, itemSold, supplierName } =
    props.inventory;
  console.log(name);
  const { handleDeleteItem } = props;

  return (
    <tr>
      <td>{_id}</td>
      <td>
        <img
          className="rounded img-thumbnail img-fluid mx-auto d-block "
          style={{ width: "100px" }}
          src={picture}
          alt=""
        />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{itemSold}</td>
      <td>{supplierName}</td>
      <td>
        <button
          onClick={() => handleDeleteItem(_id)}
          className="btn btn-secondary"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageMyInventory;
