---
hide_table_of_contents: true
---

# OnEntitySpawned

## Usage

* Called after any networked entity has spawned (including trees)
* No Return behavior

## Examples

```csharp title=""
void OnEntitySpawned(BaseNetworkable entity)
{
    Puts("OnEntitySpawned works!");
}
```
