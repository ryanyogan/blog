Vagrant.configure('2') do |config|
  config.vm.box              = 'trusty64'
  config.vm.box_url          = 'http://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box'

  config.vm.network :forwarded_port, guest: 80, host: 8080

end
