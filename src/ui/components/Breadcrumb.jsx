import React from "react";
import { Link, useLocation } from "react-router-dom";
export const routeMap = {
  "/": "Inicio",
  "/animes": "Animes",
  "/animes/:id": "Anime Detalle",
  "/comics": "Comics",
  "/comics/:id": "Comic Detalle",
  "/login": "Login",
};

const generateBreadcrumbs = (location) => {
  const pathname = location.pathname;
  const pathParts = pathname.split("/").filter((part) => part);

  let breadcrumbs = [
    { label: routeMap["/"], href: "/", active: pathParts.length === 0 },
  ];

  let currentPath = "";

  pathParts.forEach((part, index) => {
    currentPath += `/${part}`;
    const isLast = index === pathParts.length - 1;
    const label = routeMap[currentPath] || "Detalle";

    breadcrumbs.push({
      label: label,
      href: currentPath,
      active: isLast,
    });
  });

  return breadcrumbs;
};

const BreadcrumbItem = ({ item, index }) => (
  <li
    className={`breadcrumb-item  ${item.active ? "color-breadcrumb" : ""}`}
    aria-current={item.active ? "page" : undefined}
  >
    {item.active ? (
      item.label
    ) : (
      <Link to={item.href} className="text-white text-decoration-none">
        {index === 0 && <i className="fa fa-home me-1 text-danger"></i>}
        {item.label}
      </Link>
    )}
  </li>
);

const Breadcrumb = () => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location);

  return (
    <div className="py-3">
      <div className="container">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb mb-0 align-items-center">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem item={item} index={index} />
                {!item.active && index < breadcrumbs.length - 1 && (
                  <i className="fa fa-chevron-right mx-2 text-white fs-12"></i>
                )}
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
