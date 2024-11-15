import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const GameEndModal = ({ isOpen, onRequestClose, userAssets, aiAssets, userProfit, aiProfit }) => {
  const navigate = useNavigate();
  const handleHomeRedirect = () => {
    onRequestClose();
    navigate('/');
  };

  const isUserWinner = userAssets > aiAssets;

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Game End Modal"
        style={{
            content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: 'auto',
            zIndex: '1000',
            color: 'black',
            backgroundColor: '#f7f7f7',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            }
        }}
        >
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>游戏结束</h2>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            {isUserWinner 
                ? 'Congratulations! You have conquered the stock market and emerged as a true master of trading!' 
                : 'Sorry, you lost to the AI. Remember, stock trading carries risks, so invest wisely!'}
            </p>
            <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
            <h3 style={{ color: '#444', marginBottom: '10px' }}>最终结果:</h3>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>Player总资产: <span style={{ fontWeight: 'bold' }}>${userAssets.toFixed(2)}</span></p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>AI总资产: <span style={{ fontWeight: 'bold' }}>${aiAssets.toFixed(2)}</span></p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>Player总盈利: <span style={{ fontWeight: 'bold' }}>${userProfit.toFixed(2)}</span></p>
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>AI总盈利: <span style={{ fontWeight: 'bold' }}>${aiProfit.toFixed(2)}</span></p>
            </div>
            <button 
            onClick={handleHomeRedirect} 
            style={{
                display: 'block',
                margin: '20px auto',
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
            >
            首页
            </button>
        </div>
      </Modal>


  );
};

export default GameEndModal;
