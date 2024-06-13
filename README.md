# Payment Book with Tanstack-Query

개인 지출 관리 애플리케이션



### 적용 기술

-   RTK / Tanstack-Query
-   react-router-dom
-   axios
-   json-server
-   styled-components



### 폴더 구조
```
📦src
 ┣ 📂api
 ┃ ┣ 📜api.js
 ┃ ┣ 📜auth.api.js
 ┃ ┗ 📜payments.api.js
 ┣ 📂components
 ┃ ┣ 📂Calendar
 ┃ ┃ ┣ 📜Calendar.jsx
 ┃ ┃ ┣ 📜Calendar.styled.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Form
 ┃ ┃ ┣ 📜Form.jsx
 ┃ ┃ ┣ 📜Form.styled.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂GlobalStyle
 ┃ ┃ ┣ 📜GlobalStyle.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Header.styled.jsx
 ┃ ┣ 📂PaymentCard
 ┃ ┃ ┣ 📜PaymentCard.jsx
 ┃ ┃ ┣ 📜PaymentCard.styled.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂PaymentList
 ┃ ┃ ┣ 📜PaymentList.jsx
 ┃ ┃ ┣ 📜PaymentList.styled.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂common
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜ControlledInput.jsx
 ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┗ 📜common.styled.jsx
 ┣ 📂context
 ┃ ┣ 📜MonthContext.jsx
 ┃ ┗ 📜PaymentContext.jsx
 ┣ 📂hooks
 ┃ ┗ 📜useInput.jsx
 ┣ 📂layout
 ┃ ┣ 📂AuthLayout
 ┃ ┃ ┣ 📜AuthLayout.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂DefaultLayout
 ┃ ┃ ┣ 📜DefaultLayout.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂MainLayout
 ┃ ┃ ┣ 📜MainLayout.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📜Layout.styled.jsx
 ┣ 📂pages
 ┃ ┣ 📂HomePage
 ┃ ┃ ┣ 📜HomePage.jsx
 ┃ ┃ ┣ 📜HomePage.loader.js
 ┃ ┃ ┣ 📜HomePage.styled.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂LoginPage
 ┃ ┃ ┗ 📜LoginPage.jsx
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📜MyPage.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂PaymentDetailPage
 ┃ ┃ ┣ 📜PaymentDetailPage.jsx
 ┃ ┃ ┣ 📜PaymentDetailPage.styled.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂SignUpPage
 ┃ ┃ ┗ 📜SignUpPage.jsx
 ┣ 📂query
 ┃ ┗ 📜QueryProvider.jsx
 ┣ 📂redux
 ┃ ┣ 📂reducers
 ┃ ┃ ┗ 📂slices
 ┃ ┃ ┃ ┣ 📜auth.slice.js
 ┃ ┃ ┃ ┗ 📜payment.slice.js
 ┃ ┗ 📜store.js
 ┣ 📂routes
 ┃ ┣ 📜ProtectedRoute.jsx
 ┃ ┣ 📜PublicRoute.jsx
 ┃ ┗ 📜router.jsx
 ┣ 📂utils
 ┃ ┗ 📜formValidation.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```
