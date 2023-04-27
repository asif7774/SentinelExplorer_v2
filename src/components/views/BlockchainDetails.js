import React from 'react';
import { Row, Col } from '../common';
import DetailsBox from '../common/DetailsBox/DetailsBox';

const BlockchainDetails = () => {
    return (
        <DetailsBox
            subtitle="Blocks"
            subtitlelink="blockchain"
            className="without-chart"
            >
            <div className="blockchain-details full-width-grid">
                <div className="blockchaindtl-header">
                    <Row>
                        <Col>Height</Col>
                        <Col>Proposal</Col>
                        <Col>Time</Col>
                    </Row>
                </div>
                <div className="blockchaindtl-body">
                    <div className="blockchaindtl-body-inner">
                        <Row>
                            <Col>34678</Col>
                            <Col>Mass</Col>
                            <Col>24s ago</Col>
                        </Row>
                        <Row>
                            <Col>34678</Col>
                            <Col>Mass</Col>
                            <Col>24s ago</Col>
                        </Row>
                        <Row>
                            <Col>34678</Col>
                            <Col>Mass</Col>
                            <Col>24s ago</Col>
                        </Row>
                        <Row>
                            <Col>34678</Col>
                            <Col>Mass</Col>
                            <Col>24s ago</Col>
                        </Row>
                        <Row>
                            <Col>34678</Col>
                            <Col>Mass</Col>
                            <Col>24s ago</Col>
                        </Row>
                        <Row>
                            <Col>34678</Col>
                            <Col>Mass</Col>
                            <Col>24s ago</Col>
                        </Row>
                    </div>
                </div>
            </div>
        </DetailsBox>
    )
}

export default BlockchainDetails
