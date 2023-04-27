import React from "react";
import classNames from "classnames";
import './Loader.less';

const Loader = ({ className, ...attrs }) => {
    const classes = classNames(
        className,
        "preload"
    );
    return (
        <React.Fragment>
            <section className={classes} id="preloader">
                <div className="loader">
                    <svg viewBox="-0.21 3.513 43.711 47.35" xmlns="http://www.w3.org/2000/svg">
                      <g id="logo_full_svg_dark" transform="matrix(1, 0, 0, 1, 1.234, 0)">
                        <path d="M40.867,0V16.9c0,3.518.322,10.074-2.681,15.138-3.861,6.45-10.884,11.354-17.748,11.94-6.863-.64-13.887-5.544-17.748-11.993C-.312,26.972.01,20.362.01,16.844V0Z" fill="#142d51" transform="translate(0.055 5.305)"/>
                        <path  d="M 42.212 16.951 C 42.211 20.439 42.442 27.37 39.297 32.732 C 35.257 39.369 27.707 44.568 20.598 45.262 L 20.492 45.272 L 20.387 45.262 C 13.224 44.568 5.665 39.361 1.628 32.72 C -1.462 27.31 -1.227 20.439 -1.227 16.951 L -1.227 -1.238 L 42.212 -1.238 Z M 1.248 1.238 L 1.248 16.951 C 1.247 20.499 0.838 26.739 3.756 31.457 C 7.436 37.714 13.963 42.268 20.492 42.788 C 26.968 42.268 33.496 37.713 37.178 31.453 C 40.144 26.796 39.737 20.499 39.736 16.951 L 39.736 1.238 Z" fill=" rgb(0, 182, 250)" transform="translate(0 5)" />
                        
                        <path id="p1" data-name="Path" d="M 30.261 37.368 C 30.275 37.354 30.289 37.34 30.302 37.327 C 30.288 37.34 30.274 37.354 30.26 37.368 L 30.261 37.368 C 29.728 37.9 29.162 38.4 28.566 38.865 L 28.566 38.892 C 28.143 39.155 27.772 39.471 27.349 39.734 C 27.15 39.893 26.937 40.035 26.714 40.157 C 26.713 40.157 26.713 40.157 26.712 40.157 C 26.696 40.174 26.676 40.187 26.654 40.196 C 26.65 40.198 26.645 40.199 26.641 40.201 C 26.64 40.202 26.639 40.202 26.638 40.202 C 26.63 40.207 26.621 40.21 26.608 40.21 C 26.597 40.216 26.587 40.223 26.576 40.229 C 26.575 40.23 26.574 40.231 26.572 40.232 C 24.804 41.32 22.823 42.016 20.764 42.273 C 20.752 42.275 20.74 42.276 20.728 42.278 C 20.7 42.282 20.673 42.286 20.645 42.289 C 20.605 42.294 20.566 42.299 20.526 42.304 C 20.511 42.305 20.497 42.307 20.483 42.309 C 20.479 42.309 20.475 42.31 20.471 42.31 C 20.044 42.266 19.62 42.196 19.201 42.1 C 18.986 42.091 18.773 42.055 18.566 41.995 C 18.566 41.995 18.566 41.995 18.565 41.994 C 14.016 40.75 10.141 37.765 7.775 33.685 C 5.605 30.056 5.817 25.27 5.817 22.745 L 5.817 22.009 L 26.603 37.426 C 26.605 37.424 26.608 37.423 26.61 37.421 L 26.609 37.42 C 26.821 37.275 27.028 37.122 27.23 36.963 C 27.566 36.698 27.888 36.414 28.195 36.114 C 28.25 36.06 28.304 36.005 28.358 35.95 L 28.354 35.947 C 28.354 35.947 28.354 35.947 28.355 35.946 L 5.819 19.169 L 5.819 10.491 L 9.416 10.491 L 9.416 10.49 L 35.022 10.49 L 35.022 25.112 L 18.568 12.857 L 14.914 12.857 L 14.919 12.858 L 34.864 27.691 L 34.864 28.164 C 34.806 28.785 34.7 29.4 34.547 30.005 L 34.547 29.795 C 34.388 29.601 34.228 29.419 34.072 29.263 C 34.12 29.311 34.168 29.362 34.217 29.415 C 34.325 29.532 34.435 29.66 34.544 29.793 L 34.544 30.003 C 34.461 30.4 34.358 30.793 34.236 31.179 C 33.967 32.028 33.605 32.847 33.155 33.619 C 33.143 33.641 33.13 33.664 33.118 33.686 C 33.055 33.791 32.993 33.895 32.929 33.998 C 32.916 34.019 32.904 34.039 32.891 34.059 C 32.89 34.061 32.889 34.063 32.888 34.065 C 32.725 34.329 32.556 34.588 32.379 34.842 C 32.234 35.052 32.085 35.258 31.931 35.461 C 31.855 35.56 31.779 35.659 31.701 35.757 C 31.259 36.326 30.778 36.864 30.261 37.368 Z M 30.27 37.351 C 30.266 37.356 30.261 37.36 30.256 37.365 L 30.26 37.367 C 30.407 37.22 30.551 37.071 30.693 36.919 C 30.555 37.065 30.414 37.209 30.27 37.351 Z M 21.169 42.213 C 23.047 41.913 24.852 41.258 26.488 40.282 C 26.455 40.301 26.422 40.321 26.389 40.34 C 26.352 40.362 26.315 40.383 26.277 40.405 C 26.163 40.47 26.049 40.533 25.934 40.595 C 25.796 40.669 25.657 40.741 25.516 40.811 C 25.298 40.92 25.077 41.023 24.854 41.121 C 24.704 41.187 24.554 41.251 24.402 41.312 C 24.048 41.454 23.69 41.582 23.327 41.697 C 22.622 41.921 21.901 42.094 21.169 42.213 Z" fill="#00b6fa" />
                      </g>
                    </svg>
                  </div>
                </section>
        </React.Fragment>
    );
}

export default Loader;