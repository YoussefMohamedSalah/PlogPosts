// import { Button, Modal, Form } from 'react-bootstrap';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import React, { useContext } from 'react';
// import { postsListContext } from '../Contexts/PostsListContext';
// import 'react-notifications/lib/notifications.css';
// import {
//   NotificationContainer,
//   NotificationManager,
// } from 'react-notifications';

// function CommentsForm({success}) {
//   const { setPosts, modalShow, setModalShow } = useContext(postsListContext);

//   function onHide() {
//     setModalShow(false);
//   }

//   const addPost = async (values) => {
//     try {
//       console.log(values);
//       // Post Method
//       const API = axios.create({ baseURL: ' https://api.tawwr.com' });
//       const sendPost = await API.post('/posts', values);
//       const getPosts = await API.get('/posts');
//       setPosts(getPosts.data.data);
//       console.log(sendPost);
//     } catch (error) {
//       console.log('404! Page Not Found');
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       title: '',
//       userId: '',
//       body: '',
//     },
//     onSubmit: (values) => {
//       addPost(values);
//       onHide();
//       console.log(values);
//     },
//     validationSchema: Yup.object({
//       title: Yup.string()
//         .required('Title is required')
//         .max(40, 'limit passed')
//         .min(20, 'min 20 words'),
//       userId: Yup.number()
//         .required('you must specify a number')
//         .min(1, 'Min value 0.')
//         .max(10, 'Max value 10.'),
//       body: Yup.string().required('your message is required'),
//     }),
//   });

//     const faild = function () {
//       NotificationManager.info('You Missid Some Info', 'Info message');
//     };
//     const successfullAdd = function () {
//       onHide();
//       success();
//     };
//   return (
//     <Modal
//       show={modalShow}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       onHide={() => onHide()}>
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           create Post
//         </Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <Form onSubmit={formik.handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter Title"
//               name="title"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.title}
//             />
//             {formik.touched.title && formik.errors.title && (
//               <p>{formik.errors.title}</p>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Author</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter Author"
//               name="userId"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.userId}
//             />
//             {formik.touched.userId && formik.errors.userId && (
//               <p>{formik.errors.userId}</p>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>New Post</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Create Post"
//               name="body"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.body}
//             />
//             {formik.touched.body && formik.errors.body && (
//               <p>{formik.errors.body}</p>
//             )}
//           </Form.Group>
//           <Button 
//           onClick={
//             (() => onHide(),
//             () =>
//               formik.values.body &&
//               formik.values.userId &&
//               formik.values.title
//                 ? successfullAdd()
//                 : faild())
//           }
//           variant="primary" type="submit">
//             Add Post
//           </Button>
//         </Form>
//       </Modal.Body>
//       <NotificationContainer />
//     </Modal>
//   );
// }

// export default CommentsForm;
