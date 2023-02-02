import * as React from "react";

export default function BasicMenu({ title, titleEndIcon, urls }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="nav-item dropdown body2">
      <a
        className="nav-link dropdown-toggle d-flex gap-1 justify-content-xs-start justify-content-md-center after-none text-primary"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id={`basic-button-${title}`}
      >
        {title} <i className={`bi ${titleEndIcon && titleEndIcon}`}></i>
      </a>
      {urls && Array.isArray(urls) && urls.length > 0 && (
        <ul
          className="dropdown-menu bg-translucent"
          style={{ width: "max-content" }}
        >
          {React.Children.toArray(
            urls.map((data, index) =>
              !data.titleExist ? (
                <div
                  key={data.menuName && data.menuName + index}
                  className="d-flex flex-row gap-2 border-bottom-1 border-white p-2 px-3"
                >
                  {data.menuIcon && (
                    <span className="body2">{data.menuIcon}</span>
                  )}
                  <div className="d-flex flex-column">
                    {data.menuName && (
                      <h4 className="body2">{data.menuName}</h4>
                    )}
                    {data.menuDescription && (
                      <p className="caption pd-2">{data.menuDescription}</p>
                    )}
                    <div className="d-flex flex-wrap gap-2">
                      {data.url &&
                        Array.isArray(data.url) &&
                        data.url.length > 0 &&
                        React.Children.toArray(
                          data.url.map((url, index) => (
                            <a
                              key={url.menuName && url.menuName + index}
                              className="bg-translucent border-1 border-white rounded-4 px-3 pt-1 text-white"
                              style={{ textDecoration: "none" }}
                              href={url.url && url.url}
                              target={url.isExternalURL ? "_blank" : "_self"}
                              rel={
                                url.isExternalURL ? "noopener noreferrer" : ""
                              }
                            >
                              {url.menuName}
                            </a>
                          ))
                        )}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* <Accordion
                    variant="transparent"
                    defaultExpanded={!data.isNestMenuCollapsed}
                    key={data.menuName && data.menuName + index}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{}}>
                      <span
                        style={{
                          marginRight: "16px",
                        }}
                      >
                        {data.menuIcon && data.menuIcon}
                      </span>
                      <Typography variant="body2">
                        {data.menuName && data.menuName}
                        <br />
                        <Typography variant="caption" sx={{ pb: 2 }}>
                          {data.menuDescription && data.menuDescription}
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack direction="column" flexWrap="wrap">
                        {data.url &&
                          Array.isArray(data.url) &&
                          data.url.length > 0 &&
                          React.Children.toArray(
                            data.url.map((urls, index) => (
                              <Stack
                                key={urls.menuName && urls.menuName + index}
                                sx={{
                                  borderBottom: "1px solid",
                                  borderColor: "grey.700",
                                  py: 2,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ px: 2, pb: 1 }}
                                >
                                  {urls.menuName && urls.menuName}
                                </Typography>
                                <Stack
                                  direction="row"
                                  flexWrap="wrap"
                                  sx={{
                                    p: 1,
                                    gap: 1,
                                  }}
                                >
                                  {urls.url &&
                                    Array.isArray(urls.url) &&
                                    urls.url.length > 0 &&
                                    React.Children.toArray(
                                      urls.url.map((url, index) => (
                                        <MenuItem
                                          key={
                                            url.menuName && url.menuName + index
                                          }
                                          component="a"
                                          href={url.url && url.url}
                                          target={
                                            url.isExternalURL
                                              ? "_blank"
                                              : "_self"
                                          }
                                          rel={
                                            url.isExternalURL
                                              ? "noopener noreferrer"
                                              : ""
                                          }
                                          onClick={handleClose}
                                          sx={{
                                            p: 0,
                                            ":hover": {
                                              backgroundColor: "transparent",
                                            },
                                          }}
                                        >
                                          <Chip label={url.menuName} />
                                        </MenuItem>
                                      ))
                                    )}
                                </Stack>
                              </Stack>
                            ))
                          )}
                      </Stack>
                    </AccordionDetails>
                  </Accordion> */}
                  <div className="px-3 pt-2">
                    <div className="d-flex">
                      <span
                        className="body2"
                        style={{
                          marginRight: "16px",
                        }}
                      >
                        {data.menuIcon && data.menuIcon}
                      </span>
                      <div className="d-flex flex-column gap-1">
                        {data.menuName && (
                          <p className="body2 m-0">{data.menuName}</p>
                        )}
                        {data.menuDescription && (
                          <p className="caption pb-2 m-0">
                            {data.menuDescription}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-wrap">
                      {data.url &&
                        Array.isArray(data.url) &&
                        data.url.length > 0 &&
                        React.Children.toArray(
                          data.url.map((urls, index) => (
                            <div
                              className="d-flex flex-column border-bottom-1 border-white py-2"
                              key={urls.menuName && urls.menuName + index}
                            >
                              <p className="body2 px-2 pb-1 mb-1">
                                {urls.menuName && urls.menuName}
                              </p>
                              <div className="d-flex flex-row flex-wrap p-1 ps-4 gap-1">
                                {urls.url &&
                                  Array.isArray(urls.url) &&
                                  urls.url.length > 0 &&
                                  React.Children.toArray(
                                    urls.url.map((url, index) => (
                                      <a
                                        key={
                                          url.menuName && url.menuName + index
                                        }
                                        className="bg-translucent border-1 border-white rounded-4 px-3 pt-1 text-white"
                                        style={{ textDecoration: "none" }}
                                        href={url.url && url.url}
                                        target={
                                          url.isExternalURL ? "_blank" : "_self"
                                        }
                                        rel={
                                          url.isExternalURL
                                            ? "noopener noreferrer"
                                            : ""
                                        }
                                      >
                                        {url.menuName}
                                      </a>
                                    ))
                                  )}
                              </div>
                            </div>
                          ))
                        )}
                    </div>
                  </div>
                  {/* <details open className="px-3">
                    <summary className="d-flex justify-content-between text-white pt-4">
                      <div className="d-flex">
                        <span
                          className="body2"
                          style={{
                            marginRight: "16px",
                          }}
                        >
                          {data.menuIcon && data.menuIcon}
                        </span>
                        <div className="d-flex flex-column gap-1">
                        {data.menuName && (
                          <p className="body2 m-0">{data.menuName}</p>
                        )}
                        {data.menuDescription && (
                          <p className="caption pb-2 m-0">
                            {data.menuDescription}
                          </p>
                        )}
                      </div>
                      </div>{" "}
                      <i className="bi bi-chevron-down"></i>
                    </summary>
                    <div className="d-flex flex-column flex-wrap">
                      {data.url &&
                        Array.isArray(data.url) &&
                        data.url.length > 0 &&
                        React.Children.toArray(
                          data.url.map((urls, index) => (
                            <div
                              className="d-flex flex-column border-bottom-1 border-white py-2"
                              key={urls.menuName && urls.menuName + index}
                            >
                              <p className="body2 px-2 pb-1">
                                {urls.menuName && urls.menuName}
                              </p>
                              <div className="d-flex flex-row flex-wrap p-1 gap-1">
                                {urls.url &&
                                  Array.isArray(urls.url) &&
                                  urls.url.length > 0 &&
                                  React.Children.toArray(
                                    urls.url.map((url, index) => (
                                      <a
                                        key={
                                          url.menuName && url.menuName + index
                                        }
                                        className="bg-translucent border-1 border-white rounded-4 px-3 pt-1 text-white"
                                        style={{ textDecoration: "none" }}
                                        href={url.url && url.url}
                                        target={
                                          url.isExternalURL ? "_blank" : "_self"
                                        }
                                        rel={
                                          url.isExternalURL
                                            ? "noopener noreferrer"
                                            : ""
                                        }
                                      >
                                        {url.menuName}
                                      </a>
                                    ))
                                  )}
                              </div>
                            </div>
                          ))
                        )}
                    </div>
                  </details> */}
                </>
              )
            )
          )}
        </ul>
      )}
    </div>
  );
}
