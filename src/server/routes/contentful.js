const express = require('express');
const contentful = require('contentful');

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS,
  space: process.env.CONTENTFUL_SPACE,
});

const pages = [
  'contact',
  'homePage',
  'news',
  'venueHire',
  'whatsOn',
];

const api = express.Router();

const getPage = async page => {
  const { items } = await client.getEntries({ content_type: page, include: 5 });
  return items;
};


api.get('/:page', async (req, res) => {
  const { page } = req.params;
  if (!pages.contains(page)) return res.status(404).json({ status: 'error', message: 'not in contentful' });
  const [pageInfo] = await getPage(page);
  return res.json({ status: 'found', payload: pageInfo });
});

module.exports = api;
