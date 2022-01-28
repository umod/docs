---
hide_table_of_contents: true
---

# OnIORefCleared

## Usage

* Called after a wire has been disconnected from an electrical entity, such as when its connected entity was destroyed or when a player removed the wire
* No return behavior

## Examples

```csharp title=""
void OnIORefCleared(IOEntity.IORef ioRef, IOEntity ioEntity)
{
    Puts("OnIORefCleared works!");
}
```
