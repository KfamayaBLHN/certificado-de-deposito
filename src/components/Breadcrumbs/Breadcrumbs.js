import React from 'react';

const Breadcrumbs = ({ items = [] }) => {
  return (
    <section className="breadcrumbs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumbs-list">
                {items.map((item, index) => {
                  const isLast = index === items.length - 1;
                  return (
                    <li
                      key={index}
                      className={`breadcrumb-item2 ${isLast ? 'breadcrumb-current' : ''}`}
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {item.url && item.url !== '#' ? (
                        <a href={item.url} className="breadcrumb-link">{item.label}</a>
                      ) : (
                        item.label
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
