// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './app.module.scss';
import { Layout } from './layout/layout';
import Main from './main/main';
import Contacts from './contacts/contacts';
import Teachers from './teachers/teachers';
import NotFound from './not-found/not-found';

export const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
        <Route path="teachers" element={<Teachers />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  </HashRouter>
);

export default App;