import React from 'react'

function EmojiSection({emoji, setEmoji}) {

  return (
    <div>
        <span
            className="text-[38px] cursor-pointer"
            onClick={() => {
              setEmoji(emoji);
            }}
          >
            {emoji}
          </span>
    </div>
  )
}

export default EmojiSection
