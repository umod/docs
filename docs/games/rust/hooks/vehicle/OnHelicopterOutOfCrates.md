---
hide_table_of_contents: true
---

# OnHelicopterOutOfCrates

## Usage

* Called when a CH47 helicopter runs out of crates
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? OnHelicopterOutOfCrates(CH47HelicopterAIController heli)
{
    Puts("OnHelicopterOutOfCrates works!");
    return null;
}
```
