import { TableContainer, TablePagination } from "@mui/material";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  //Fetching Product.............................................
  useEffect(() => {
    const requestBody = {
      query: `
          query {
            products {
              rating
              title
              _id
              name
              size
              color
              category
               img
              description
              price
              gender
             brand
            }
          }
              `,
    };

    fetch("https://jems-server1.herokuapp.com/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((resData) => {
        setProducts(resData.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // pagination........................................................
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Delete...........................................................
  const handleDeleteProduct = (id) => {
    const requestBody = {
      query: `
      mutation{deleteProduct(_id:"${id}")}
            
              `,
    };
    fetch(`https://jems-server1.herokuapp.com/graphql`, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then()
      .then((res) => res.json())
      .then((data) => {
        alert("deleted successfully");
      });
  };

  //Update push.......................................................
  const history = useHistory();
  const handleUpdateProduct = (id) => {
    history.push(`/updateProduct/${id}`);
  };

  // let i = 1;

  return (
    <div className=" bg-gray-200 p-4 font-mono">
      <div>
        <div className=" flex text-gray-800 items-center justify-between p-4 ">
          <h1 className="text-2xl font-bold   "> Manage Products</h1>
          <p>Total products:{products.length}</p>
        </div>

        <div className="w-full">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="left">Price</StyledTableCell>
                  <StyledTableCell align="left">Brand</StyledTableCell>
                  <StyledTableCell align="left">Brand</StyledTableCell>
                  <StyledTableCell align="left">Category</StyledTableCell>
                  <StyledTableCell align="left">Color</StyledTableCell>
                  <StyledTableCell align="left">Size</StyledTableCell>
                  <StyledTableCell align="left">Department</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product) => (
                    <StyledTableRow
                      key={product.name}
                      className={classes.tables}
                    >
                      <StyledTableCell align="left">
                        {product.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {product.price}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {product.brand}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <img className="w-12" src={product.img} alt="" />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {product.category}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <input
                          class="px-1 shadow appearance-none rounded-full w-full leading-tight ring-2 "
                          type="color"
                          value={product.color}
                          disabled
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {product.size}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {product.department}
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <button
                          onClick={() => handleUpdateProduct(product._id)}
                          className="p-3 rounded-full bg-blue-400 hover:bg-blue-800 hover:text-gray-100"
                        >
                          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        </button>
                      </StyledTableCell>

                      <StyledTableCell align="left">
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="p-3 rounded-full bg-red-400 hover:bg-red-800 hover:text-gray-100"
                        >
                          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
