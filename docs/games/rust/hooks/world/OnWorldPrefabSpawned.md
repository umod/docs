---
hide_table_of_contents: true
---

# OnWorldPrefabSpawned

## Usage

* Called after a world prefab has spawned
* No return behavior

## Examples

```csharp title="Log when a world prefab has spawned"
void OnWorldPrefabSpawned(GameObject gameObject, string category)
{
    Puts($"World prefab '{gameObject.name}' in category {category} spawned");
}
```
