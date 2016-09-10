FROM knockdata/zeppelin-highcharts:0.6.1

RUN cd $ZEPPELIN_HOME \
  && rm -rf notebook \
  && git clone https://github.com/rockiey/zeppelin-notebooks.git notebook \
  && git clone https://github.com/rockiey/data.git 
  
WORKDIR $ZEPPELIN_HOME
CMD ["bin/zeppelin.sh"]