/* eslint-disable */
import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Axios from './axios';
import Assinaturas from './assinaturas';
import Dashboard from './dashboard';
import Ecommerce from './ecommerce';
import Fiscal from './fiscal';
import Orders from './newOrder';
import Financeiro from './financeiro';
import Produtos from './produtos';
import Ferramentas from './ferramentas';
import Aprendizado from './aprendizado';
import Vendas from './vendas';
import Configuracoes from './configuracoes';
import Relatorios from './relatorios';
import MySubscription from './others';
import Compras from './compras';
import Suporte from './suporte';
import Estoque from './estoque';
import Features from './features';
import Gallery from './gallery';
import Pages from './pages';
import Usuarios from './usuarios';
import Widgets from './widgets';
import withAdminLayout from '../../layout/withAdminLayout';

const Charts = lazy(() => import('./charts'));
const KnowledgeBase = lazy(() => import('../../container/pages/knowledgeBase/Index'));
const AllArticle = lazy(() => import('../../container/pages/knowledgeBase/AllArticle'));
const KnowledgeSingle = lazy(() => import('../../container/pages/knowledgeBase/SingleKnowledge'));
const Components = lazy(() => import('./components'));
const Task = lazy(() => import('../../container/task/Index'));
const Tickets = lazy(() => import('../../container/supportTicket/Index'));
const AddTicket = lazy(() => import('../../container/supportTicket/AddSupport'));
const TicketDetails = lazy(() => import('../../container/supportTicket/SupportTicketDetails'));
const Courses = lazy(() => import('../../container/course/Index'));
const CourseDetails = lazy(() => import('../../container/course/CourseDetails'));
const Import = lazy(() => import('../../container/importExport/Import'));
const Export = lazy(() => import('../../container/importExport/Export'));
const ToDo = lazy(() => import('../../container/toDo/ToDo'));
const Note = lazy(() => import('../../container/note/Note'));
// const Kanban = lazy(() => import('../../container/kanban/Index'));
const Contact = lazy(() => import('../../container/contact/Contact'));
const ContactGrid = lazy(() => import('../../container/contact/ContactGrid'));
const ContactAddNew = lazy(() => import('../../container/contact/AddNew'));
const Calendars = lazy(() => import('../../container/calendar/Calendar'));
const Projects = lazy(() => import('./projects'));
const Myprofile = lazy(() => import('../../container/profile/myProfile/Index'));
const Chat = lazy(() => import('../../container/chat/ChatApp'));
const Inbox = lazy(() => import('../../container/email/Email'));
const Maps = lazy(() => import('./maps'));
const Editors = lazy(() => import('../../container/pages/Editor'));
const Icons = lazy(() => import('./icons'));
const Tables = lazy(() => import('./table'));
const Jobs = lazy(() => import('../../container/jobSearch/Jobs'));
const JobDetails = lazy(() => import('../../container/jobSearch/JobSearchDetails'));
const JobApply = lazy(() => import('../../container/jobSearch/JobApplication'));
const Firebase = lazy(() => import('./firebase'));
const NotFound = lazy(() => import('../../container/pages/404'));

const Admin = React.memo(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index path="/*" element={<Dashboard />} />
        <Route path="pages/*" element={<Pages />} />
        <Route path="gallery/*" element={<Gallery />} />
        <Route path="all-articles" element={<AllArticle />} />
        <Route path="knowledgeBase/*" element={<KnowledgeBase />} />
        <Route path="knowledgebaseSingle/:id" element={<KnowledgeSingle />} />
        <Route path="components/*" element={<Components />} />
        <Route path="charts/*" element={<Charts />} />
        <Route path="app/task/*" element={<Task />} />
        <Route path="usuarios/*" element={<Usuarios />} />
        <Route path="app/support/tickets/*" element={<Tickets />} />
        <Route path="app/support/tickets/add" element={<AddTicket />} />
        <Route path="app/support/ticketDetails/:id" element={<TicketDetails />} />
        <Route path="app/course/courseDetails/:id" element={<CourseDetails />} />
        <Route path="app/course/*" element={<Courses />} />
        <Route path="importExport/import" element={<Import />} />
        <Route path="importExport/export" element={<Export />} />
        <Route path="app/to-do" element={<ToDo />} />
        <Route path="app/note/*" element={<Note />} />
        {/* <Route path="app/kanban/*" element={<Kanban />} /> */}
        <Route path="contact/list" element={<Contact />} />
        <Route path="contact/grid" element={<ContactGrid />} />
        <Route path="contact/addNew" element={<ContactAddNew />} />
        <Route path="app/calendar/*" element={<Calendars />} />
        <Route path="features/*" element={<Features />} />
        <Route path="assinaturas/*" element={<Assinaturas />} />
        <Route path="aprendizado/*" element={<Aprendizado />} />
        <Route path="configuracoes/*" element={<Configuracoes />} />
        <Route path="others/*" element={<MySubscription />} />
        <Route path="fiscal/*" element={<Fiscal />} />
        <Route path="newOrder/*" element={<Orders />} />
        <Route path="financeiro/*" element={<Financeiro />} />
        <Route path="ferramentas/*" element={<Ferramentas />} />
        <Route path="vendas/*" element={<Vendas />} />
        <Route path="relatorios/*" element={<Relatorios />} />
        <Route path="produtos/*" element={<Produtos />} />
        <Route path="suporte/*" element={<Suporte />} />
        <Route path="compras/*" element={<Compras />} />
        <Route path="project/*" element={<Projects />} />
        <Route path="profile/myProfile/*" element={<Myprofile />} />
        <Route path="ecommerce/*" element={<Ecommerce />} />
        <Route path="estoque/*" element={<Estoque />} />
        <Route path="main/chat/*" element={<Chat />} />
        <Route path="email/*" element={<Inbox />} />
        <Route path="maps/*" element={<Maps />} />
        <Route path="editor" element={<Editors />} />
        <Route path="icons/*" element={<Icons />} />
        <Route path="tables/*" element={<Tables />} />
        <Route path="widgets/*" element={<Widgets />} />
        <Route path="app/jobs/*" element={<Jobs />} />
        <Route path="app/job/apply" element={<JobApply />} />
        <Route path="app/jobDetails/:id" element={<JobDetails />} />
        <Route path="firestore/*" element={<Firebase />} />
        <Route path="axios/*" element={<Axios />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
