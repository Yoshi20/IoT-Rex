module Api::V1
  class ThingsController < ApplicationController

    def index
      render json: { :things => [
        {
          name: 'some name',
          text: 'some text'
        }
      ]}.to_json
    end

  end
end
