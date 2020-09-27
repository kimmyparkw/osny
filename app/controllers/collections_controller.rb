class CollectionsController < ApplicationController
        before_action :find_collection, only: [:show, :update, :destroy]
    
        def index
            @collections = Collection.all
            render json: @collections
        end
    
        def show
            render json: @collection
        end
    
        def create
            @collection = Collection.create(collection_params)
            if @collection
                render json: @collection
            else
                render error: { error: 'Unable to create collection' }, status: 400
            end
        end
    
        def update
            if @collection
                @collection.update(collection_params)
                render json: { message: 'collection updated successfully' }, status: 200
            else
                render error: { error: 'Unable to update collection' }, status: 400
            end
        end
    
        def destroy
            if @collection
                @collection.destroy
            else
                render error: { error: 'Unable to delete collection' }, status: 400
            end
        end
    
        private
        def collection_params
            params.require(:collection).permit(:title, :release_date, :image)
        end

        def find_collection
            @collection = Collection.find(params[:id])
        end
    
end
