import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
export default function ProductRow(props) {
  const { product } = props;
  const { deleteProduct } = props;
  const deleteTooltip = (
    <Tooltip id="close-tooltip" placement="top">Delete Product</Tooltip>
  );
  const editTooltip = (
    <Tooltip id="close-tooltip" placement="top">Edit Issue</Tooltip>
  );
  const viewImageTooltip = (
    <Tooltip id="close-tooltip" placement="top">View Image</Tooltip>
  );
  return (
    <tr>
      <td>{product.Name}</td>
      <td>
        $
        {product.Price}
      </td>
      <td>{product.Category}</td>

      <td>
        <LinkContainer to={`/image/${product.image}`}>
          <OverlayTrigger delayShow={1000} overlay={viewImageTooltip}>
            <Button bsSize="xsmall">
              View
            </Button>
          </OverlayTrigger>
        </LinkContainer>
      </td>
      <td>
        <LinkContainer to={`/edit/${product.id}`}>
          <OverlayTrigger delayShow={1000} overlay={editTooltip}>
            <Button bsSize="xsmall">
              Edit
            </Button>
          </OverlayTrigger>
        </LinkContainer>
      </td>
      <td>
        <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
          <Button bsSize="xsmall" onClick={() => { deleteProduct(product.id); }}>Delete Product</Button>
        </OverlayTrigger>
      </td>
    </tr>
  );
}
