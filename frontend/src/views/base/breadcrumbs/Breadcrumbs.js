import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Breadcrumbs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Breadcrumb</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The breadcrumb navigation provides links back to each previous page the user navigated
              through and shows the current location in a website or an application. You don’t have
              to add separators, because they automatically added in CSS through{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
                {' '}
                <code>::before</code>
              </a>{' '}
              and{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
                {' '}
                <code>content</code>
              </a>
              .
            </p>
            <DocsExample href="components/breadcrumb">
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">首页</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>库</CBreadcrumbItem>
              </CBreadcrumb>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">首页</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">库</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>数据</CBreadcrumbItem>
              </CBreadcrumb>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">首页</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">库</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">数据</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>启动</CBreadcrumbItem>
              </CBreadcrumb>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
