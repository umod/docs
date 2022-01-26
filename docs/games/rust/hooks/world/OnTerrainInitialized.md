---
hide_table_of_contents: true
---

# OnTerrainInitialized

## Usage

* Called after the terrain generation process has completed
* No return behavior

## Examples

```csharp title="Store when terrain has been initialized"
bool terrainInitialized;

void OnTerrainInitialized(TerrainMeta terrainMeta)
{
    Puts("Terrain has been initialized");
    terrainInitialized = true;
}
```
