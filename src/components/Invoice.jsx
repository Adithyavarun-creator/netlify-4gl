// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   PDFViewer,
// } from "@react-pdf/renderer";

// import React from "react";
// import { Page, Text, Document, StyleSheet } from "@react-18-pdf/renderer";

// const styles = StyleSheet.create({
//   body: {
//     padding: "20px 20px",
//   },
//   page: {
//     backgroundColor: "white",
//     color: "black",
//     display: "flex",
//     alignItems: "center",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     display: "flex",
//     gap: "50px",
//   },
//   viewer: {
//     width: window.innerWidth,
//     height: window.innerHeight,
//   },
//   mainHeading: {
//     fontSize: "33px",
//     color: "red",
//     alignItems: "center",
//     textDecoration: "underline",
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   subHeading: {
//     fontSize: "28px",
//     color: "black",
//     alignItems: "center",
//     marginBottom: "20px",
//   },
//   thirdHeading: {
//     fontSize: "19px",
//     color: "black",
//     textDecoration: "underline",
//     fontWeight: "bold",
//     marginBottom: "40px",
//   },
// });

// const Invoice = ({ email, select, click }) => {
//   return (
//     <Document>
//       <Page style={styles.body}>
//         <Text style={styles.mainHeading}>4GL Services</Text>
//         <Text style={styles.subHeading}>
//           Technological solutions for service stations
//         </Text>
//         <Text style={styles.thirdHeading}>Payment Reciept</Text>
//         <Text style={styles.thirdHeading}>For user {email}</Text>
//         <Text style={styles.thirdHeading}>Payment for {select}</Text>
//         <Text style={styles.thirdHeading}>
//           Amount received is {click}€
//         </Text>{" "}
//         <Text style={styles.thirdHeading}>
//           This is completely verified by me
//         </Text>
//       </Page>
//     </Document>
//   );
// };

// export default Invoice;
