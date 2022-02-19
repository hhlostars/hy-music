import styled from "styled-components";

export const TopBodyWrapper = styled.div`

  padding: 40px;

  .header {
    display: flex;
    align-items: center;
    .image {
      padding: 3px;
      border: 1px solid #ccc;
      position: relative;
      img {
        width: 150px;
        height: 150px;
      }

      .image_cover {
        background-position: -230px -380px;
      }
    }

    .info {
      margin-left: 30px;
      .title {
        color: #333;
        font-size: 20px;
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      }

      .time {
        display: flex;
        align-items: center;
        color: #666;
        margin: 8px 0 30px;

        .clock {
          display: inline-block;
          width: 13px;
          height: 13px;
          background-position: -18px -682px;
          position: relative;
          top: -2px;
          margin-right: 3px;
        }

        .update-f {
          color: #999;
        }
      }
    }
  }

  .play-list {
    padding-top: 10px;
    table {
      width: 100%;
      border: 1px solid #d9d9d9;
    }
    thead {
      th {
        height: 34px;
        line-height: 34px;
        background-image: url(${require("@/assets/img/sprite_table.png")});
        color: #666;
        border: 1px solid #ddd;
        border-width: 0 0 1px 1px;
        padding-left: 10px;
      }
      .ranking {
        width: 78px;
        border-left: none;
      }
      .duration {
        width: 91px;
      }
      .singer {
        width: 173px;
      }
    }

    tbody {
      td {
        padding: 6px 10px;
      }
      tr:nth-child(2n) {
        background-color: #fff;
      }
      tr:nth-child(2n+1) {
        background-color: #f7f7f7;
      }
      .rank-num {
        display: flex;
        .num {
          width: 25px;
          height: 18px;
          text-align: center;
          color: #999;
        }
        .new {
          width: 16px;
          height: 17px;
          margin-left: 12px;
          background-position: -67px -283px;
        }
      }
      .song-name {
        display: flex;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        .play {
          width: 17px;
          height: 17px;
          background-position: 0 -103px;
        }
        .name {
          margin-left: 10px;
        }
      }
    }
  }
`
