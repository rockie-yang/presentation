FROM zeppelin-highchart:0.6.3

RUN cd $ZEPPELIN_HOME \
  && rm -rf notebook \
  && git clone https://github.com/rockie-yang/zeppelin-notebooks.git notebook \
  && git clone https://github.com/rockie-yang/data.git \
  && git config --global user.email "eyouyan@gmail.com" \
  && git config --global user.name "Rockie Yang"

WORKDIR $ZEPPELIN_HOME
CMD ["bin/zeppelin.sh"]
