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
import AdminSidebar from "./../adminSidebar/AdminSidebar";

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
  const [product, setProduct] = useState([]);
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  //Fetching Product.............................................
  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);
  console.log(product);

  // pagination........................................................
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //Delete...........................................................
  const deleted = () => {
    fetch(`http://localhost:4000/getProducts`)
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  };

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:4000/getProducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // alert('Product Deleted')
          deleted();
        }
      });
  };

  //Update push.......................................................
  const history = useHistory();
  const handleUpdateProduct = (id) => {
    history.push(`/updateProduct/${id}`);
  };

  // let i = 1;

  return (
    <div className=" bg-gray-800 ">
      <div className="w-screen h-20 p-6">Jem's</div>

      <div className="flex flex-wrap">
        <AdminSidebar />

        <div className="sm:w-3/5 w-screen mx-4">
          <h1 className="mt-3 text-2xl font-bold text-white m-2 ">
            Manage Products
          </h1>

          <div className="w-full">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    {/* <StyledTableCell>ID</StyledTableCell> */}

                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="left">Price</StyledTableCell>
                    <StyledTableCell align="left">Brand</StyledTableCell>
                    <StyledTableCell align="left">Brand</StyledTableCell>
                    <StyledTableCell align="left">Category</StyledTableCell>
                    <StyledTableCell align="left">Color</StyledTableCell>
                    <StyledTableCell align="left">Size</StyledTableCell>
                    <StyledTableCell align="left">Department</StyledTableCell>
                    <StyledTableCell align="right" className="">
                      Action
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((product) => (
                      <StyledTableRow
                        key={product.name}
                        className={classes.tables}
                      >
                        {/* <StyledTableCell align="left">{i++}</StyledTableCell> */}
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
                            {/* Delete */}
                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                            {/* Update */}
                          </button>
                        </StyledTableCell>

                        <StyledTableCell align="left">
                          <button
                            onClick={() => handleDeleteProduct(product._id)}
                            className="p-3 rounded-full bg-red-400 hover:bg-red-800 hover:text-gray-100"
                          >
                            {/* Delete */}
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                            ></FontAwesomeIcon>
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
              count={product.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
