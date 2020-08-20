import React from 'react';
import classNames from 'classnames';

function TabPanes({ tab }) {
  return (
    <>
      <div className="tab-content mt-3">
        <div role="tabpanel" className={classNames('tab-pane', { active: tab === 'info' })} id="info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aliquid, aut, pariatur maiores eius
            blanditiis minus vitae nostrum quidem, dolorem minima rerum ratione. Tenetur assumenda repellat aut, ea
            animi distinctio.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>consectetur adipisicing elit</li>
          </ul>
        </div>
        <div role="tabpanel" className={classNames('tab-pane', { active: tab === 'review' })} id="review">
          <div className="text-center">
            <p className="h2 text-warning">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </p>
            <p>
              <strong>5.0</strong>/5.0 out of <strong>5</strong> Ratings
            </p>
          </div>
        </div>
        <div role="tabpanel" className={classNames('tab-pane', { active: tab === 'shipping' })} id="shipping">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repudiandae culpa soluta sit, recusandae nulla
          veniam exercitationem consequatur ratione accusantium facere vel, magni laudantium, vero non minus quas
          cupiditate asperiores.
        </div>
      </div>
      <style jsx>{`
        .tab-content {
          padding: 20px 20px 1px;
          overflow: hidden;
        }
        p {
          line-height: 24px;
          color: #797979;
        }
      `}</style>
    </>
  );
}

export default TabPanes;
