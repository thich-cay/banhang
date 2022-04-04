/**
 * Copyright (c) 2022 Thich Am Thuc LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Tham khảo</h5>
            <a href={this.docUrl('seller.html', this.props.language)}>
              Bắt đầu bán hàng cùng Thích Cay
            </a>
            <a href={this.docUrl('guideline.html', this.props.language)}>
              Hướng dẫn Người bán
            </a>
            <a href={this.docUrl('partner.html', this.props.language)}>
              Chính sách Đại lý
            </a>
            <a href={this.docUrl('return.html', this.props.language)}>
              Quy định đổi trả hàng
            </a>
            <a href={this.docUrl('tips.html', this.props.language)}>
              Mẹo bán hàng
            </a>
          </div>
          <div>
            <h5>Cộng đồng</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Seller Forum
            </a>
            <a
              href="https://pinterest.com/thichcayvn/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Pinterest
            </a>
            <a href="https://github.com/thichcay/">
              
              Github
            </a>
            <a
              href="https://facebook.com/thichcay.vn/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Facebook
            </a>
          </div>
          <div id="fb-root"></div>
          <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0" nonce="78zTGjhA"></script>
          <div>
            <h5>Link</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Tài liệu</a>
            <a href="https://banhang.thichcay.com/">Seller Center</a>
            <a
              className="facebook-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/thichcay.vn"
              data-show-count="true"
              data-count-aria-label="# like on Facebook"
              aria-label="Like us on Facebook"
            >
              Like
            </a>
          </div>
          <div class="fb-like" data-href="https://www.facebook.com/thichcay.vn/" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>  
        </section>

        <a
          href="https://banhang.thichcay.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource"
        >
          <img
            src={`${this.props.config.baseUrl}img/thichamthuc.svg`}
            alt="Thich Am Thuc LLC"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
