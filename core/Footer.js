/**
 * Copyright (c) 2021-present, Thich Am Thuc LLC.
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
            <h5>Docs</h5>
            <a href={this.docUrl('seller.html', this.props.language)}>
              Bắt đầu bán hàng cùng Thích Cay
            </a>
            <a href={this.docUrl('guide.html', this.props.language)}>
              Hướng dẫn Người bán
            </a>
            <a href={this.docUrl('tips.html', this.props.language)}>
              Mẹo bán hàng
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Pinterest
            </a>
            <a
              href="https://pinterest.com/thichcayvn/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            <a href="https://github.com/thichcay/">Project Chat</a>
            <a
              href="https://facebook.com/thichcay.vn/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Facebook
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Seller Center</a>
            <a href="https://banhang.thichcay.com/">Thich Am Thuc LLC</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
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
