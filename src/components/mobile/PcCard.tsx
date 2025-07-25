'use client'

import { PcCardProps } from '../types'
import ImageComponent from './ImageComponent'

export default function PcCard({ pc }: PcCardProps) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: '#fff'
    }}>
      {/* カードヘッダー */}
      <div style={{ textAlign: 'center' }}>
        {/* デバイス名 */}
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 'bold' }}>
          {pc.brand} / {pc.name || 'Unnamed PC'}
        </h3>
      </div>
    
      {/* カードボディ */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>

        {/* カード画像 */}
        <div style={{ flexShrink: 0 }}>
          {pc.img_url ? (
            <ImageComponent 
              src={pc.img_url} 
              alt={pc.name || 'PC Image'} 
              style={{width: '120px', height: 'auto', borderRadius: '4px'}} 
            />
          ) : (
            <div style={{
              width: '120px',
              height: '80px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              fontSize: '12px',
              color: '#666'
            }}>
              No Image
            </div>
          )}
        </div>

        {/* PC情報 */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
            {pc.cpu && <div>🔴 CPU：{pc.cpu}</div>}
            {pc.ram && <div>🔴 メモリ：{pc.ram}GB</div>}
            {pc.rom && <div style={{ marginBottom: '8px' }}>🔴 ストレージ：{pc.rom}GB</div>}
            {pc.display_size && <div>画面サイズ：{pc.display_size} インチ</div>}
            {pc.weight && <div>重さ：{pc.weight}g</div>}
            {pc.estimatedBatteryLifeHours && <div>駆動時間(推定)：{pc.estimatedBatteryLifeHours}時間</div>}
          </div>

          {/* 価格 */}
          <div style={{ marginTop: '12px', fontSize: '16px', fontWeight: 'bold' }}>
            {pc.price && (
              <span style={{ color: '#d32f2f' }}>¥{pc.price.toLocaleString()}</span>
            )}
            {pc.real_price && pc.real_price !== pc.price && (
              <span style={{ 
                color: '#666', 
                fontSize: '14px', 
                textDecoration: 'line-through',
                marginLeft: '8px'
              }}>
                ¥{pc.real_price.toLocaleString()}
              </span>
            )}
          </div>

          <div style={{ marginTop: '12px', fontSize: '16px', fontWeight: 'bold' }}>
            {pc.pcScore && <div><strong>スペック評価:</strong> {pc.pcScore / 10}点</div>}
          </div>

          {pc.fetched_at && (
            <div style={{ 
              fontSize: '12px', 
              color: '#666', 
              marginTop: '8px' 
            }}>
              データ取得: {pc.fetched_at}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}