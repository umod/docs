---
hide_table_of_contents: true
---

# OnTerrainCreate

## Usage

* Called before the terrain creation process has started
* No return behavior

## Examples

```csharp title="Log when terrain creation has started"
void OnTerrainCreate(TerrainGenerator terrainGenerator)
{
    Puts("Terrain creation started...");
}
```
