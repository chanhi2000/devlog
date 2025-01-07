import db from '../db'

const Q_ALL = 'SELECT * FROM yt_channels WHERE 1=1'
const Q_BY_ID = `${Q_ALL} AND id = ?`
const Q_BY_CHANNEL_ID = `${Q_ALL} AND channel_id = ?`
const Q_CREATE = 'INSERT INTO yt_channels (channel_id, name, url_profile, url_banner) VALUES (?, ?, ?, ?)'
const Q_UPDATE = 'UPDATE yt_channels SET channel_id = ?, name = ?, url_profile = ?, url_banner = ? WHERE 1=1 AND id = ?'
const Q_DELETE = 'DELETE FROM yt_channels WHERE 1=1 AND id = ?'

const ytChannel = {
  findAll: (callback) => db.all(Q_ALL, [], callback),
  findById: (id, callback) => db.get(Q_BY_ID, [id], callback),
  findByChannelId: (channelId, callback) => db.get(Q_BY_CHANNEL_ID, channelId, callback),
  create: (user, callback) => db.run(Q_CREATE, [user.channelId, user.name, user.urlProfile, user.urlBanner], callback),
  update: (id, user, callback) => db.run(Q_UPDATE, [user.channelId, user.name, user.urlProfile, user.urlBanner, id], callback),
  delete: (id, callback) => db.run(Q_DELETE, [id], callback)
}

export default ytChannel;