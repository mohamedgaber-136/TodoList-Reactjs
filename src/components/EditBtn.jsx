import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TodoDoContext } from "../context/TodoData";
import * as Yup from 'yup'
export default function EditBtn({item,ind}) {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [colorValue, setColorvalue] = React.useState('#fff');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {setData,data} = React.useContext(TodoDoContext)
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const validation = Yup.object().shape({
    title:Yup.string().required("required  *"),
    description: Yup.string().required(" required *"),
    Tdate: Yup.date().required("required *")
  });

  const initialValues = {
    state:item.state,
    title: item.title,
    description: item.description,
    Tdate: item.Tdate,
    id:item.id
  }
  const onSubmit = (values) => {
      const newData=data.splice(ind,1,values)
    
    setData([...data])
    localStorage.setItem('data', JSON.stringify([...data]))
    handleClose()
  }


  return (
    <div className="addBTN">

      <Button onClick={handleOpen} className=' d-flex justify-content-end'>
        <i
          className="fa-solid fa-pen "
          style={{ color: "#000" }}
          ></i>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded rounded-2">
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validation}>
            {() => (
              <Form>
                <div className="container border rounded p-2 d-flex flex-column gap-3">
                  <div className="d-flex flex-column">
                    <label htmlFor="title">Title</label>
                    <span className="text-danger">
                <ErrorMessage name='title'/>
                </span>
                    <Field
                      as={TextField}
                      type="text"
                      className="border rounded"
                      placeholder="Title"
                      id="title"
                      name="title"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="description">description</label>    
                    
                    <span className="text-danger">
                <ErrorMessage name='description'/>
                </span>

                    <Field
                      as={TextField}
                      type="text"
                      className="border rounded"
                      placeholder="description"
                      id="description"
                      name="description"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="Tdate">date</label>
                    <span className="text-danger">

                    <ErrorMessage name='Tdate'/>
                    </span>
                    <Field
                      as={TextField}
                      type="date"
                      className="border rounded"
                      id="Tdate"
                      name="Tdate"
                    />
                  </div>
            
                  <button  type='submit' className="bg-dark rounded text-white">edit</button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
