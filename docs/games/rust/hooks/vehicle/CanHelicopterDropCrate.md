---
hide_table_of_contents: true
---

# CanHelicopterDropCrate

## Usage

* Called when a CH47 helicopter attempts to drop a crate
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanHelicopterDropCrate(CH47HelicopterAIController heli)
{
    Puts("CanHelicopterDropCrate works!");
    return null;
}
```
