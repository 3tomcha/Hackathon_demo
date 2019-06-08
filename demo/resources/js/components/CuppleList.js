import React, {Component} from 'react';
import { CardColumns } from 'react-bootstrap';
import Cupple from './Cupple';
import ReactDOM from 'react-dom';

class CuppleList extends Component {

    dateFormat(value) {
        var date = new Date(parseInt(value)*1000);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var w = date.getDay();
        var wNames = ['日', '月', '火', '水', '木', '金', '土'];

        if (m < 10) {
            m = '0' + m;
        } if (d < 10) {
            d = '0' + d;
        }
        return '交際記念日：' + y + '年' + m + '月' + d + '日' + '🎉';
    }

    render() {
        const list = this.props.cupplelist.map((cupple, i) => {
            return (
                <Cupple
                    key={i}
                    user1_address={cupple.user1.addr}
                    user1_name={cupple.user1.name}
                    user1_image={cupple.user1.image}
                    user2_address={cupple.user2.addr}
                    user2_name={cupple.user2.name}
                    user2_image={cupple.user2.iamge}
                    memorial_time={this.dateFormat(cupple.timestamp._hex)}
                    internalLink={true}
                />
            );
        });

        return (
            <div>
                <CardColumns>
                    {list}
                </CardColumns>
            </div>
        );
    }
}

export default CuppleList;

if (document.getElementById('cupplelist')) {
  ReactDOM.render(<CuppleList />, document.getElementById('cupplelist'));
}
