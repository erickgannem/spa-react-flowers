import React from 'react';

import {
  Col, Row, Pagination, PageItem,
} from 'react-bootstrap';

import Articles from '../../components/Articles';
import Loading from '../../components/Loading';
import ArticlesContext from '../../context/ArticlesContext';
import LoadingContext from '../../context/LoadingContext';
import ModalContext from '../../context/ModalContext';

import Modal from '../../components/Modal';

const totalPages = (itemsArr) => {
  const itemsCount = itemsArr ? itemsArr.length : 1;
  return Math.ceil(itemsCount / 3);
};
function Catalog() {
  const [activePage, setActivePage] = React.useState(1);
  const [articlesPerPage] = React.useState(3);
  const { articlesState } = React.useContext(ArticlesContext);
  const { loadingState } = React.useContext(LoadingContext);
  const { showModal } = React.useContext(ModalContext);

  const setPaginationBoxes = React.useCallback((quantity) => {
    const items = [];
    for (let number = 1; number <= quantity; number += 1) {
      items.push(
        <PageItem key={number} active={number === activePage} onClick={() => setActivePage(number)}>
          {number}
        </PageItem>,
      );
    }
    return items;
  }, [activePage]);
  const items = setPaginationBoxes(totalPages(articlesState.articles));
  const handlePageLeft = () => activePage > 1 && setActivePage(activePage - 1);
  const handlePageRight = () => (activePage < items.length) && setActivePage(activePage + 1);

  const indexOfLastArticle = activePage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesState.articles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <>
      <Modal showModal={showModal} />
      <Row className="d-flex flex-column px-3 flex-md-row justify-content-center">
        {loadingState.isLoading ? <Loading /> : <Articles articles={currentArticles} />}
      </Row>

      {
        !loadingState.isLoading && (
        <Row noGutters className="justify-content-center mt-3">
          <Col xl={6} lg={3} md={3}>
            <Pagination size="md" className="justify-content-center align-items-center">
              <Pagination.Prev onClick={handlePageLeft} />
              {items}
              <Pagination.Next onClick={handlePageRight} />
            </Pagination>
          </Col>
        </Row>
        )
      }

    </>
  );
}

export default Catalog;
