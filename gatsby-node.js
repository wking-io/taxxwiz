/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
console.log(process.env.NODE_ENV);
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
