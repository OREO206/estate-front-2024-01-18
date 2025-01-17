import React, { useState } from 'react';
import './style.css';
import SelectBox from 'src/components/SelectBox';
import { Bar, Line } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Tooltip,
    Legend
);

export default function Ratio() {

    const returnOptions = {
        responsive: false,
        scales: {
            y: {
                min: 150,
                max: 300,
                ticks: {
                    stepSize : 30
                }
            }
        }
    };

    const leaseRatioOptions = {
        responsive: false,
        scales: {
            y: {
                min: 150,
                max: 300,
                ticks: {
                    stepSize : 30
                }
            }
        }
    };

    const monthRentRatioOptions = {
        responsive: false,
        scales: {
            y: {
                min: 150,
                max: 300,
                ticks: {
                    stepSize : 30
                }
            }
        }
    };
    
    const [selectLocal, setSelectLocal] = useState<string>('');

    const onLocalChangeHandler = (selectLocal: string) => {
        setSelectLocal(selectLocal);
    };

    const returnData = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        datasets: [
            {
                label: '40 이하',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(58, 87, 232, 1)',
                backgroundColor: 'rgba(58, 87, 232, 1)'
            },
            {
                label: '40 초과 60이하',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(0, 203, 93, 1)',
                backgroundColor: 'rgba(0, 203, 93, 1)'
            },
            {
                label: '60 초과 85이하',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(255, 168, 0, 1)',
                backgroundColor: 'rgba(255, 168, 0, 1)'
            },
            {
                label: '85 초과',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(255, 84, 64, 1)',
                backgroundColor: 'rgba(255, 84, 64, 1)'
            }
        ]
    };


    const leaseRatioData = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        datasets: [
            {
                label: '40 이하',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(58, 87, 232, 1)',
                backgroundColor: 'rgba(58, 87, 232, 1)'
            },
            {
                label: '40 초과 60이하',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(0, 203, 93, 1)',
                backgroundColor: 'rgba(0, 203, 93, 1)'
            },
            {
                label: '60 초과 85이하',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(255, 168, 0, 1)',
                backgroundColor: 'rgba(255, 168, 0, 1)'
            },
            {
                label: '85 초과',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(255, 84, 64, 1)',
                backgroundColor: 'rgba(255, 84, 64, 1)'
            }
        ]
    };

    const monthRentRatioData = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        datasets: [
            {
                label: '40 이하',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(58, 87, 232, 1)',
                backgroundColor: 'rgba(58, 87, 232, 1)'
            },
            {
                label: '40 초과 60이하',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(0, 203, 93, 1)',
                backgroundColor: 'rgba(0, 203, 93, 1)'
            },
            {
                label: '60 초과 85이하',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(255, 168, 0, 1)',
                backgroundColor: 'rgba(255, 168, 0, 1)'
            },
            {
                label: '85 초과',
                data: [255, 224, 242, 224, 225, 200, 255, 211, 224, 232, 225, 226],
                borderColor: 'rgba(255, 84, 64, 1)',
                backgroundColor: 'rgba(255, 84, 64, 1)'
            }
        ]
    };


    return (
        <div id='local-wrapper'>
            <div className='local-top'>
                <div className='local-search-box'>
                    <SelectBox value={selectLocal} onChange={onLocalChangeHandler} />
                    <div className='primary-button'>검색</div>
                </div>
                <div className='local-origin-text'>데이터 출처: KOSIS</div>
            </div>
            <div className='local-card'>
                <div className='local-card-title-box'>
                    <div className='local-card-title'>수익률 평균</div>
                    <div className='local-card-unit'>(단위: 백만원)</div>
                </div>
                <div className='local-card-chart-box'>
                    <Bar width={'1086px'} height={'238px'} options={returnOptions} data={returnData}/>
                </div>
            </div>
            <div className='local-card'>
                <div className='local-card-title-box'>
                    <div className='local-card-title'>매매가격 대비 전세 비율</div>
                    <div className='local-card-unit'>(단위: 백만원)</div>
                </div>
                <div className='local-card-chart-box'>
                    <Bar width={'1086px'} height={'238px'} options={leaseRatioOptions} data={leaseRatioData} />
                </div>
            </div><div className='local-card'>
                <div className='local-card-title-box'>
                    <div className='local-card-title'>전세 가격 대비 월세 보증금 비율</div>
                    <div className='local-card-unit'>(단위: 백만원)</div>
                </div>
                <div className='local-card-chart-box'>
                    <Bar width={'1086px'} height={'238px'} options={monthRentRatioOptions} data={monthRentRatioData} />
                </div>
            </div>
        </div>
    )
}