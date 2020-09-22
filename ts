#!/bin/bash
tensorboard --logdir $1 --port 6789 --host 0.0.0.0
