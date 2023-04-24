import React from 'react';

import { AppLink as Link } from '../AppLink';
import { ThemeToggle } from '.';

export function Footer({ children: links, landing }) {
  const copyright = (
    <Link href="/">
      <svg title="thelatepass.org" width="99"
        height="28" fill="none"
        enableBackground="new 0 0 1197.5 507.5" version="1.1" viewBox="0 0 1197.5 507.5" xmlns="http://www.w3.org/2000/svg">
      </svg>
    </Link>
  );

  const disclaimer = (
    <span className="disclaimer">
      <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">
      <svg width="31.75mm" height="11.112mm" version="1.1" viewBox="0 0 31.75 11.112" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-89.208 -142.94)"><g transform="matrix(.26294 0 0 .26291 42.193 123.25)"><path 
      fillRule="evenodd"
          clipRule="evenodd"
          d="m182.24 75.39 114.06 0.20312c1.5938 0 3.0176-0.23682 3.0176 3.1802l-0.13965 37.567h-119.82v-37.707c0-1.6846 0.16309-3.2436 2.8784-3.2436z" fill="#aab2ab" nodetypes="ccccccc"/><g transform="matrix(.87292 0 0 .87292 50.125 143.21)"><path cx="296.35416" cy="264.3577" rx="22.939548" ry="22.939548" d="m187.21-55.679c6e-3 8.6802-7.0279 15.721-15.708 15.727-8.6802 5e-3 -15.722-7.0279-15.727-15.708v-0.01904c-5e-3 -8.6813 7.0278-15.722 15.708-15.727 8.6813-0.0056 15.722 7.0279 15.727 15.708v0.01904z" fill="#fff" type="arc"/><g transform="translate(-289.62 99.065)"><path d="m473.88-167.55c3.4854 3.486 5.2284 7.7539 5.2284 12.803 0 5.0494-1.7128 9.2715-5.1383 12.667-3.6353 3.5766-7.9318 5.3643-12.889 5.3643-4.8978 0-9.1199-1.7726-12.665-5.3196-3.5458-3.5458-5.3184-7.783-5.3184-12.712 0-4.9286 1.7726-9.196 5.3184-12.803 3.4552-3.4865 7.6772-5.2289 12.665-5.2289 5.0483 0 9.314 1.7424 12.799 5.2289zm-23.118 2.3448c-2.9468 2.9764-4.4196 6.4629-4.4196 10.462 0 3.9984 1.4583 7.4552 4.3742 10.371 2.9165 2.9165 6.3885 4.3748 10.417 4.3748 4.0285 0 7.5302-1.4728 10.507-4.419 2.8259-2.7358 4.2394-6.1771 4.2394-10.326 0-4.118-1.4365-7.6129-4.3077-10.485-2.8706-2.8707-6.3499-4.3065-10.438-4.3065-4.0884 0-7.5464 1.4432-10.372 4.3289zm7.7545 8.7031c-0.45032-0.98163-1.1243-1.4722-2.0232-1.4722-1.5891 0-2.3834 1.0695-2.3834 3.2085 0 2.1396 0.79428 3.2091 2.3834 3.2091 1.0494 0 1.799-0.5213 2.2487-1.5651l2.2028 1.173c-1.0499 1.8655-2.6251 2.799-4.7255 2.799-1.6199 0-2.9176-0.4967-3.8921-1.4896-0.97607-0.99341-1.4627-2.3627-1.4627-4.108 0-1.7156 0.50229-3.0771 1.5075-4.0856 1.0052-1.0079 2.257-1.5125 3.7578-1.5125 2.2201 0 3.8098 0.87488 4.7708 2.6229zm10.363 0c-0.45087-0.98163-1.1115-1.4722-1.9824-1.4722-1.6211 0-2.4321 1.0695-2.4321 3.2085 0 2.1396 0.81107 3.2091 2.4321 3.2091 1.051 0 1.7872-0.5213 2.2072-1.5651l2.252 1.173c-1.0482 1.8655-2.6212 2.799-4.7177 2.799-1.6177 0-2.9126-0.4967-3.8865-1.4896-0.97217-0.99341-1.4594-2.3627-1.4594-4.108 0-1.7156 0.49448-3.0771 1.4829-4.0856 0.98782-1.0079 2.2453-1.5125 3.7735-1.5125 2.2162 0 3.8037 0.87488 4.7613 2.6229z"/></g></g><path d="m297.3 74.911h-116.23c-1.2466 0-2.2607 1.0146-2.2607 2.2612v39.496c0 0.28174 0.22852 0.51074 0.51025 0.51074h119.73c0.28174 0 0.51074-0.229 0.51074-0.51074v-39.496c0-1.2466-1.0142-2.2612-2.2607-2.2612zm-116.23 1.0215h116.23c0.68359 0 1.2393 0.55615 1.2393 1.2398v27.418h-83.074c-3.0449 5.5054-8.9111 9.2436-15.644 9.2436-6.7354 0-12.6-3.7349-15.644-9.2436h-4.3481v-27.418c-2e-5 -0.6836 0.55663-1.2398 1.2402-1.2398z"/><g enableBackground="new    " fill="#fff"><path d="m265.61 112.88c0.0801 0.15576 0.1875 0.28174 0.32129 0.37842 0.13379 0.0962 0.29004 0.16797 0.46973 0.21436 0.18066 0.0469 0.36719 0.0703 0.55957 0.0703 0.12988 0 0.26953-0.0107 0.41895-0.0327 0.14844-0.0215 0.28809-0.064 0.41895-0.12598 0.12988-0.062 0.23926-0.14795 0.3252-0.25684 0.0879-0.10889 0.13086-0.24707 0.13086-0.41553 0-0.18018-0.0576-0.32617-0.17285-0.43848-0.11426-0.1123-0.26562-0.20508-0.45215-0.28027-0.18555-0.0742-0.39746-0.13965-0.63281-0.1958-0.23633-0.0562-0.47559-0.11816-0.71777-0.18701-0.24902-0.062-0.49121-0.13818-0.72754-0.22852-0.23535-0.0898-0.44727-0.20703-0.63379-0.3501s-0.33691-0.32178-0.45215-0.53662c-0.11426-0.21484-0.17188-0.47461-0.17188-0.7793 0-0.34277 0.0732-0.63965 0.21875-0.8916 0.14648-0.25195 0.33789-0.46191 0.57422-0.63037 0.23535-0.16797 0.50293-0.29248 0.80176-0.37354 0.29785-0.0806 0.59668-0.12109 0.89453-0.12109 0.34863 0 0.68262 0.0391 1.0029 0.11719 0.31934 0.0776 0.60449 0.2041 0.85254 0.37842 0.24902 0.17432 0.44629 0.39697 0.59277 0.66797 0.14551 0.271 0.21875 0.59961 0.21875 0.98535h-1.4219c-0.0127-0.19922-0.0547-0.36426-0.125-0.49463-0.0713-0.13086-0.16602-0.2334-0.2832-0.30859-0.11816-0.0742-0.25293-0.12744-0.4043-0.1582-0.15234-0.0312-0.31738-0.0469-0.49707-0.0469-0.11719 0-0.23535 0.0127-0.35254 0.0371-0.11816 0.0254-0.22461 0.0688-0.32031 0.13086-0.0967 0.0625-0.17578 0.14014-0.2373 0.2334-0.0615 0.0937-0.0928 0.21191-0.0928 0.35498 0 0.13086 0.0244 0.23682 0.0742 0.31738 0.0498 0.0811 0.14844 0.15576 0.29395 0.22412 0.14551 0.0684 0.34766 0.13721 0.60547 0.20557 0.25781 0.0684 0.59473 0.15576 1.0117 0.26123 0.12402 0.0249 0.2959 0.0703 0.5166 0.13574 0.2207 0.0654 0.43945 0.16943 0.65723 0.3125 0.21777 0.14355 0.40527 0.33496 0.56445 0.57422 0.1582 0.23975 0.2373 0.54639 0.2373 0.91992 0 0.30518-0.0596 0.58838-0.17773 0.84961-0.11816 0.26172-0.29395 0.4873-0.52734 0.67676-0.2334 0.19043-0.52246 0.33789-0.86719 0.44385-0.3457 0.10596-0.74609 0.15869-1.1992 0.15869-0.36719 0-0.72363-0.0454-1.0693-0.13574-0.34473-0.0903-0.65039-0.23242-0.91504-0.42578-0.26367-0.19336-0.47363-0.43994-0.62988-0.73877-0.15527-0.29932-0.22949-0.65381-0.22363-1.0649h1.4219c-3e-5 0.22412 0.04 0.41406 0.12106 0.56933z"/><path d="m273.87 107.87 2.4932 6.6641h-1.5225l-0.50391-1.4844h-2.4932l-0.52246 1.4844h-1.4746l2.5205-6.6641zm0.084 4.0859-0.83984-2.4434h-0.0186l-0.86914 2.4434z"/><path d="m239.18 107.87c0.31738 0 0.60742 0.0283 0.86914 0.084 0.26172 0.0561 0.48633 0.14795 0.67383 0.27539 0.18652 0.12744 0.33203 0.29688 0.43457 0.5083s0.1543 0.47266 0.1543 0.78369c0 0.33594-0.0762 0.61523-0.22949 0.83936-0.15234 0.22412-0.37891 0.40723-0.67773 0.55029 0.41211 0.11816 0.71973 0.3252 0.92285 0.62109s0.30469 0.65234 0.30469 1.0693c0 0.33594-0.0654 0.62695-0.19629 0.87305-0.13086 0.24561-0.30762 0.44629-0.52832 0.60205-0.22168 0.15576-0.47461 0.271-0.75781 0.34521-0.28418 0.0752-0.5752 0.1123-0.875 0.1123h-3.2363v-6.6641h3.1416zm-0.1875 2.6953c0.26172 0 0.47656-0.062 0.64551-0.18604 0.16797-0.12451 0.25195-0.32568 0.25195-0.60498 0-0.15527-0.0283-0.28271-0.084-0.38184-0.0566-0.0996-0.13086-0.17676-0.22461-0.23291-0.0937-0.0557-0.20117-0.0947-0.32227-0.11621-0.12207-0.022-0.24805-0.0327-0.37891-0.0327h-1.373v1.5547zm0.0859 2.8281c0.14355 0 0.28027-0.0137 0.41113-0.042 0.13086-0.0278 0.24707-0.0747 0.34668-0.13965 0.0996-0.0654 0.17871-0.1543 0.23828-0.26611 0.0596-0.11181 0.0889-0.25488 0.0889-0.4292 0-0.3418-0.0967-0.58594-0.29004-0.73193-0.19336-0.14599-0.44922-0.21924-0.7666-0.21924h-1.5996v1.8281z"/><path d="m241.89 107.87h1.6436l1.5606 2.6318 1.5508-2.6318h1.6338l-2.4736 4.1064v2.5576h-1.4688v-2.5947z"/></g><g transform="matrix(.625 0 0 .625 391.23 176.93)"><path cx="475.97119" cy="252.08646" rx="29.209877" ry="29.209877" d="m-175.01-139.12c6e-3 9.4118-7.6172 17.048-17.03 17.055-9.411 7e-3 -17.047-7.6172-17.055-17.03v-0.025c-6e-3 -9.4125 7.6188-17.047 17.03-17.055 9.4126-7e-3 17.049 7.618 17.055 17.03v0.025z" fill="#fff" type="arc"/><g transform="translate(-23.952 -89.73)"><path d="m-168.22-68.055c-5.1719 0-9.5485 1.8047-13.131 5.4133-3.6766 3.7344-5.5141 8.1532-5.5141 13.256s1.8375 9.4915 5.5141 13.163c3.675 3.6719 8.0532 5.5079 13.131 5.5079 5.1407 0 9.5954-1.8516 13.367-5.5548 3.55-3.5156 5.3266-7.8883 5.3266-13.116 0-5.2266-1.8078-9.647-5.4219-13.256-3.6141-3.6086-8.0376-5.4133-13.272-5.4133zm0.0469 3.3602c4.2375 0 7.836 1.493 10.797 4.4805 2.9891 2.9563 4.4844 6.5657 4.4844 10.829 0 4.2938-1.4625 7.8571-4.3922 10.689-3.0844 3.0493-6.7141 4.5735-10.889 4.5735-4.175 0-7.7735-1.5094-10.795-4.5266-3.0219-3.0195-4.5328-6.5969-4.5328-10.736 0-4.1383 1.5266-7.7485 4.5797-10.829 2.9282-2.9876 6.511-4.4805 10.749-4.4805z"/><path d="m-176.5-52.021c0.74377-4.6977 4.0516-7.2086 8.1954-7.2086 5.961 0 9.5922 4.325 9.5922 10.092 0 5.6274-3.8641 9.9993-9.686 9.9993-4.0047 0-7.5891-2.4648-8.2423-7.3008h4.7032c0.14062 2.511 1.7703 3.3946 4.0984 3.3946 2.6532 0 4.3782-2.4649 4.3782-6.2329 0-3.9523-1.4906-6.0454-4.286-6.0454-2.0485 0-3.8172 0.74457-4.1906 3.3016l1.3687-7e-3 -3.7032 3.7016-3.7016-3.7016z"/></g></g><circle cx="242.56" cy="90.225" r="10.806" fill="#fff"/><path d="m245.69 87.098c0-0.4165-0.33789-0.75342-0.75391-0.75342h-4.7725c-0.41602 0-0.75391 0.33691-0.75391 0.75342v4.773h1.331v5.6523h3.6172v-5.6523h1.332v-4.773z"/><circle cx="242.55" cy="84.083" r="1.6323"/><path d="m242.53 78.318c-3.2314 0-5.9683 1.1274-8.2075 3.3838-2.2978 2.333-3.4463 5.0952-3.4463 8.2842s1.1484 5.9321 3.4463 8.227c2.2978 2.2944 5.0342 3.4419 8.2075 3.4419 3.2129 0 5.998-1.1567 8.3535-3.4717 2.2207-2.1968 3.3301-4.9297 3.3301-8.1973s-1.1289-6.0288-3.3877-8.2842c-2.2588-2.2563-5.0244-3.3838-8.2959-3.3838zm0.0293 2.0996c2.6484 0 4.8975 0.93359 6.7471 2.8008 1.8701 1.8472 2.8047 4.1035 2.8047 6.7676 0 2.6836-0.91504 4.9111-2.7461 6.6807-1.9277 1.9058-4.1963 2.8584-6.8057 2.8584s-4.8584-0.94287-6.7466-2.8296c-1.8896-1.8862-2.8335-4.1226-2.8335-6.7095 0-2.5864 0.9541-4.8423 2.8623-6.7676 1.8306-1.8672 4.0703-2.8008 6.7178-2.8008z"/></g></g>
      </svg>
      </a>
      {' '}
      <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">
       CC BY-SA 4.0
      </a>
      {' '}
      <style jsx>
        {`
          .disclaimer {
            color: rgba(24, 24, 27, 0.5);
            padding-left: 2rem;
            font-size: 15px;
            font-weight: 400;
            line-height: 27px;
          }

          .disclaimer button {
            display: inline-block;
            padding: 0;
            color: inherit;
            text-decoration: underline;
            font-weight: regular;
          }

          :global(body.dark) .disclaimer {
            color: var(--white);
          }

          @media screen and (max-width: 1000px) {
            .disclaimer {
              display: none;
            }
          }
        `}
      </style>
    </span>
  );

  const toggle = <ThemeToggle />;

  const fancyLinks = landing ? (
    <>
      <h3 className="jumbo">
        {React.Children.toArray(links).map((l, i, a) => (
          <span className="main-link" key={i}>
            {l}
            {i !== a.length - 1 ? ', ' : ''}
          </span>
        ))}
        <span className="try-link">
          <Link href="https://tinyletter.com/onefact">Newsletter</Link>
        </span>
      </h3>
      <hr />
      <style jsx>
        {`
          h3 {
            margin: 0;
            display: flex;
            flex-wrap: wrap;
          }

          h3 :global(.main-link:nth-child(n + 2)) {
            margin-left: 10px;
            display: inline-block;
            min-height: 0px;
          }

          h3 :global(.main-link a) {
            text-decoration: none;
          }

          hr {
            margin: 2rem auto;
            display: block;
            width: 100%;
            border: none;
            border-bottom: 1px solid var(--dark);
          }

          .try-link {
            margin-left: auto;
          }

          @media screen and (max-width: 1000px) {
            h3 {
              font-size: 35px;
              line-height: 46px;
            }
          }

          @media screen and (max-width: 780px) {
            .try-link {
              display: none;
            }
          }

          @media screen and (max-width: 600px) {
            hr {
              margin: 0 auto;
            }
            h3 {
              font-size: 24px;
              line-height: 33px;
              text-align: center;
              flex-wrap: wrap;
              justify-content: center;
              padding: 0 2rem;
            }
          }
        `}
      </style>
    </>
  ) : null;

  return (
    <>
      <footer className="desktop">
        {fancyLinks}
        <div className="flex">
          <div className="left gap">{copyright}</div>
          <div className="right gap">
            {disclaimer}
            {toggle}
          </div>
        </div>
      </footer>
      <footer className="mobile gap">
        {fancyLinks}
        {copyright}
        {toggle}
        {disclaimer}
      </footer>
      <style jsx>
        {`
          :global(.gap) {
            display: flex;
            align-items: center;
            gap: 1.5rem;
          }

          footer {
            position: relative;
            display: flex;
            z-index: 100;
            width: 100%;
            color: var(--dark);
            padding: 1rem 0;
          }

          footer.desktop {
            flex-direction: column;
          }

          footer.mobile {
            display: none;
            flex-direction: column;
            padding: 0;
          }

          .right {
            margin-left: auto;
          }

          @media screen and (max-width: 600px) {
            footer.mobile {
              display: flex;
            }
            footer.desktop {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
